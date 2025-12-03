/**
 * Update Service - Gestione aggiornamenti automatici dell'app
 */

import { Dialog } from 'quasar'
import { API } from './api/index.js'
import { useAppStore } from '../stores/useAppStore.js'
import ConfigService from './config.js'

// Import Capacitor dinamicamente per evitare errori nel build SPA
let Capacitor = null
let App = null
let Filesystem = null
let Directory = null
let FileOpener = null

// Helper per caricare Capacitor solo quando disponibile
async function loadCapacitor() {
  if (Capacitor !== null) return

  try {
    const capacitorCore = await import('@capacitor/core')
    Capacitor = capacitorCore.Capacitor

    if (Capacitor.isNativePlatform()) {
      const appModule = await import('@capacitor/app')
      App = appModule.App

      const fsModule = await import('@capacitor/filesystem')
      Filesystem = fsModule.Filesystem
      Directory = fsModule.Directory

      const fileOpenerModule = await import('@capacitor-community/file-opener')
      FileOpener = fileOpenerModule.FileOpener
    }
  } catch (error) {
    // Capacitor non disponibile (build SPA)
    Capacitor = { isNativePlatform: () => false }
  }
}

class UpdateService {
  constructor() {
    this.currentVersion = null
    this.updateInProgress = false
    this.SHOWN_UPDATES_KEY = 'shown_update_notifications'
  }

  async init() {
    await loadCapacitor()
    const appStore = useAppStore()

    if (Capacitor && Capacitor.isNativePlatform()) {
      // Ottieni info app corrente da Capacitor
      const appInfo = await App.getInfo()
      this.currentVersion = {
        name: appInfo.version,
        code: parseInt(appInfo.build) || 1
      }
      console.log('📱 Current app version (Capacitor):', this.currentVersion)
    } else {
      // Usa la versione dallo store in base al platform
      this.currentVersion = appStore.getCurrentVersion
    }
  }

  /**
   * Verifica se un aggiornamento è già stato mostrato
   */
  hasShownUpdate(versionCode) {
    try {
      const shownUpdates = JSON.parse(localStorage.getItem(this.SHOWN_UPDATES_KEY) || '[]')
      return shownUpdates.includes(versionCode)
    } catch {
      return false
    }
  }

  /**
   * Segna un aggiornamento come mostrato
   */
  markUpdateAsShown(versionCode) {
    try {
      const shownUpdates = JSON.parse(localStorage.getItem(this.SHOWN_UPDATES_KEY) || '[]')
      if (!shownUpdates.includes(versionCode)) {
        shownUpdates.push(versionCode)
        // Mantieni solo gli ultimi 10 aggiornamenti per non far crescere troppo l'array
        if (shownUpdates.length > 10) {
          shownUpdates.splice(0, shownUpdates.length - 10)
        }
        localStorage.setItem(this.SHOWN_UPDATES_KEY, JSON.stringify(shownUpdates))
      }
    } catch (error) {
      console.error('Error saving shown update:', error)
    }
  }

  /**
   * Controlla se ci sono aggiornamenti disponibili
   */
  async checkForUpdates(showNoUpdateDialog = false, forceShow = false) {
    try {
      console.log('🔍 Checking for updates...')

      const response = await API.checkUpdate(this.currentVersion.code)

      if (response.has_update) {
        console.log('✨ Update available:', response.latest_version)

        // Se non è forzato e abbiamo già mostrato questo aggiornamento, non mostrarlo
        if (!forceShow && this.hasShownUpdate(response.latest_version.version_code)) {
          console.log('⏭️ Update already shown to user, skipping...')
          return true
        }

        // Mostra il dialog e segna come mostrato
        this.showUpdateDialog(response.latest_version)
        this.markUpdateAsShown(response.latest_version.version_code)
        return true
      } else {
        console.log('✅ App is up to date')
        if (showNoUpdateDialog) {
          Dialog.create({
            title: 'Nessun aggiornamento',
            message: 'La tua app è già aggiornata all\'ultima versione.',
            ok: 'OK'
          })
        }
        return false
      }
    } catch (error) {
      // Log silenzioso per chiamate automatiche, verbose per chiamate manuali
      if (showNoUpdateDialog) {
        console.error('❌ Error checking for updates:', error)
        Dialog.create({
          title: 'Errore',
          message: 'Impossibile controllare gli aggiornamenti. Verifica la connessione.',
          ok: 'OK'
        })
      } else {
        console.warn('⚠️ Update check failed (silent):', error.message)
      }
      return false
    }
  }

  /**
   * Mostra dialog per confermare l'aggiornamento
   */
  showUpdateDialog(updateInfo) {
    const message = `
Nuova versione disponibile: v${updateInfo.version_name}

${updateInfo.release_notes || 'Miglioramenti e correzioni di bug.'}

Dimensione: ${this.formatFileSize(updateInfo.file_size)}
${updateInfo.is_mandatory ? '\n⚠️ Questo aggiornamento è obbligatorio.' : ''}
    `.trim()

    Dialog.create({
      title: '🚀 Aggiornamento Disponibile',
      message,
      ok: updateInfo.is_mandatory ? 'Aggiorna Ora' : 'Scarica',
      cancel: updateInfo.is_mandatory ? false : 'Più Tardi',
      persistent: updateInfo.is_mandatory
    }).onOk(() => {
      this.downloadAndInstallUpdate(updateInfo)
    })
  }

  /**
   * Scarica e installa l'aggiornamento
   */
  async downloadAndInstallUpdate(updateInfo) {
    if (this.updateInProgress) {
      console.log('⏳ Update already in progress')
      return
    }

    this.updateInProgress = true

    try {
      // Mostra progress dialog
      const progressDialog = Dialog.create({
        title: 'Scaricamento Aggiornamento',
        message: 'Scaricamento in corso...',
        progress: {
          spinner: true,
          color: 'primary'
        },
        persistent: true,
        ok: false,
        cancel: false
      })

      console.log('📥 Downloading update...')

      // Usa ConfigService per l'URL base (consistente con apiClient)
      const apiBaseUrl = ConfigService.getApiBaseUrl()
      const downloadUrl = `${apiBaseUrl}${updateInfo.download_url}`
      console.log('📥 Download URL:', downloadUrl)

      const response = await fetch(downloadUrl, {
        headers: {
          'Authorization': `Bearer ${this.getAuthToken()}`
        }
      })

      if (!response.ok) {
        throw new Error(`Download failed: ${response.status}`)
      }

      const blob = await response.blob()
      const fileName = `MyCrisisFamily-v${updateInfo.version_name}.apk`

      // Chiudi progress dialog
      progressDialog.hide()

      if (Capacitor && Capacitor.isNativePlatform()) {
        // MOBILE NATIVO: Salva nel filesystem e installa
        const arrayBuffer = await blob.arrayBuffer()

        await Filesystem.writeFile({
          path: fileName,
          data: this.arrayBufferToBase64(arrayBuffer),
          directory: Directory.Cache
        })

        console.log('💾 APK downloaded and saved to device')

        // Mostra dialog di installazione
        Dialog.create({
          title: '✅ Download Completato',
          message: 'L\'aggiornamento è stato scaricato. Vuoi installarlo ora?',
          ok: 'Installa',
          cancel: 'Più Tardi'
        }).onOk(async () => {
          await this.installApk(fileName)
        })
      } else {
        // WEB/PWA: Download diretto del file
        console.log('💾 Starting browser download...')

        // Crea link temporaneo per download
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = fileName
        a.style.display = 'none'

        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        window.URL.revokeObjectURL(url)

        console.log('📱 Browser download started')

        // Mostra messaggio di successo per web
        Dialog.create({
          title: '✅ Download Avviato',
          message: `Il file ${fileName} è stato scaricato nella cartella Download del browser. Trasferiscilo sul tuo dispositivo Android per installarlo.`,
          ok: 'OK'
        })
      }

    } catch (error) {
      console.error('❌ Error downloading update:', error)

      Dialog.create({
        title: 'Errore Download',
        message: 'Impossibile scaricare l\'aggiornamento. Riprova più tardi.',
        ok: 'OK'
      })
    } finally {
      this.updateInProgress = false
    }
  }

  /**
   * Installa l'APK scaricato
   */
  async installApk(fileName) {
    try {
      if (!Capacitor || !Capacitor.isNativePlatform()) {
        console.log('🌐 Cannot install APK on web platform')
        return
      }

      // Ottieni il percorso del file
      const fileResult = await Filesystem.getUri({
        directory: Directory.Cache,
        path: fileName
      })

      console.log('📱 Installing APK:', fileResult.uri)

      // Su Android, questo aprirà il package installer
      try {
        await FileOpener.open({
          filePath: fileResult.uri,
          contentType: 'application/vnd.android.package-archive',
          openWithDefault: true
        })
        console.log('📱 APK installation started')
      } catch (error) {
        console.error('❌ Error opening APK:', error)
        // Fallback: mostra messaggio per installazione manuale
        Dialog.create({
          title: 'Installazione Manuale',
          message: `File APK salvato in: ${fileResult.uri}\n\nApri il file manager e tocca il file per installare l'aggiornamento.`,
          ok: 'OK'
        })
      }

    } catch (error) {
      console.error('❌ Error installing APK:', error)

      Dialog.create({
        title: 'Errore Installazione',
        message: 'Impossibile avviare l\'installazione automatica. Installa manualmente l\'APK dalla cartella Download.',
        ok: 'OK'
      })
    }
  }

  /**
   * Utilità per formattare dimensioni file
   */
  formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  /**
   * Converte ArrayBuffer in Base64
   */
  arrayBufferToBase64(buffer) {
    let binary = ''
    const bytes = new Uint8Array(buffer)
    const len = bytes.byteLength
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i])
    }
    return btoa(binary)
  }

  /**
   * Resetta la lista degli aggiornamenti mostrati (per testing)
   */
  resetShownUpdates() {
    localStorage.removeItem(this.SHOWN_UPDATES_KEY)
    console.log('🔄 Reset shown updates list')
  }

  /**
   * Ottiene il token di autenticazione
   */
  getAuthToken() {
    // Integrazione con il tuo sistema di auth
    const authStore = JSON.parse(localStorage.getItem('auth') || '{}')
    return authStore.accessToken || ''
  }
}

// Aggiungi metodi all'API
API.checkUpdate = async function(currentVersionCode) {
  const response = await this.get(`/updates/check/?version_code=${currentVersionCode}`)
  return response.data
}

// Esporta singleton
export const updateService = new UpdateService()
export default updateService
