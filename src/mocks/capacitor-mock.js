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

// Mock WebPlugin class per plugins Capacitor
export class WebPlugin {
  constructor() {
    this.listeners = {}
  }

  addListener(eventName, listenerFunc) {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = []
    }
    this.listeners[eventName].push(listenerFunc)
    return {
      remove: () => {
        const index = this.listeners[eventName].indexOf(listenerFunc)
        if (index > -1) {
          this.listeners[eventName].splice(index, 1)
        }
      }
    }
  }

  removeAllListeners() {
    this.listeners = {}
  }
}

// Mock CapacitorException class
export class CapacitorException extends Error {
  constructor(message, code, data) {
    super(message)
    this.name = 'CapacitorException'
    this.code = code
    this.data = data
  }
}

// Mock ExceptionCode enum
export const ExceptionCode = {
  Unimplemented: 'UNIMPLEMENTED',
  Unavailable: 'UNAVAILABLE',
  Unauthorized: 'UNAUTHORIZED',
  InvalidArguments: 'INVALID_ARGUMENTS'
}

// Mock PluginListenerHandle
export class PluginListenerHandle {
  constructor(remove) {
    this.remove = remove || (() => {})
  }
}

// registerPlugin è necessario per altri plugin Capacitor come Preferences
export const registerPlugin = (pluginName, options = {}) => {
  // Ritorna un proxy che intercetta tutte le chiamate
  return new Proxy({}, {
    get: (target, prop) => {
      // Se è una funzione, ritorna un async stub
      return async (...args) => {
        console.warn(`Capacitor plugin "${pluginName}.${String(prop)}" not available on web`)
        return null
      }
    }
  })
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
