import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'
import { LocalStorage, Quasar } from 'quasar'
import messages from 'src/i18n'
import quasarLangIt from 'quasar/lang/it'
import quasarLangEnUS from 'quasar/lang/en-US'

// Supported languages
const supportedLocales = ['it-IT', 'en-US']
const fallbackLocale = 'it-IT'

// Get user's preferred language
const getUserLocale = () => {
  // 1. Check if user has saved preference
  const savedLocale = LocalStorage.getItem('user-locale')
  if (savedLocale && supportedLocales.includes(savedLocale)) {
    return savedLocale
  }

  // 2. Try to detect from browser/system
  const browserLocale = navigator.language || navigator.userLanguage

  // Check exact match
  if (supportedLocales.includes(browserLocale)) {
    return browserLocale
  }

  // Check language part only (es. 'en' from 'en-GB')
  const languageCode = browserLocale.split('-')[0]
  const matchingLocale = supportedLocales.find(locale =>
    locale.split('-')[0] === languageCode
  )

  if (matchingLocale) {
    return matchingLocale
  }

  // 3. Fallback to default
  return fallbackLocale
}

const initialLocale = getUserLocale()

// Save initial locale
LocalStorage.set('user-locale', initialLocale)

const i18nInstance = createI18n({
  locale: initialLocale,
  fallbackLocale: fallbackLocale,
  legacy: false, // DRASTIC FIX: Switch to Composition API mode
  globalInjection: true,
  messages,
  // EXTREME FIX: Disabilita TUTTO
  warnHtmlMessage: false,
  missingWarn: false,
  fallbackWarn: false,
  silentTranslationWarn: true,
  silentFallbackWarn: true
})

export default boot(({ app }) => {
  // Set i18n instance on app
  app.use(i18nInstance)

  // TEMPORARY: Disable Quasar lang packs to test if they cause the issue
  // const quasarLangMap = {
  //   'it-IT': quasarLangIt,
  //   'en-US': quasarLangEnUS
  // }

  // const langPack = quasarLangMap[initialLocale] || quasarLangIt
  // Quasar.lang.set(langPack)
  console.log('⚠️ Quasar language packs DISABLED for debugging')
  console.log('✅ i18n instance loaded with locale:', initialLocale)
})

export { i18nInstance, supportedLocales }