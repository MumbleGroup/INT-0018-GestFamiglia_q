/**
 * Mock Capacitor modules per build SPA
 * Questo file fornisce stub vuoti per i moduli Capacitor che non sono disponibili nel build web
 */

export const Capacitor = {
  isNativePlatform: () => false,
  getPlatform: () => 'web',
  isPluginAvailable: () => false,
  convertFileSrc: (filePath) => filePath
}

export const App = {
  getInfo: async () => ({
    version: '1.0.0',
    build: '1'
  }),
  exitApp: () => {
    console.warn('App.exitApp() not available on web')
  },
  addListener: () => ({
    remove: () => {}
  })
}

export const Filesystem = {
  writeFile: async () => {
    throw new Error('Filesystem not available on web')
  },
  readFile: async () => {
    throw new Error('Filesystem not available on web')
  },
  getUri: async () => {
    throw new Error('Filesystem not available on web')
  }
}

export const Directory = {
  Cache: 'CACHE',
  Documents: 'DOCUMENTS',
  Data: 'DATA',
  External: 'EXTERNAL'
}

export const FileOpener = {
  open: async () => {
    throw new Error('FileOpener not available on web')
  }
}

// Export default per moduli che usano default import
export default {
  Capacitor,
  App,
  Filesystem,
  Directory,
  FileOpener
}
