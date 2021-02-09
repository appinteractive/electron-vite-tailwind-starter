const createWindow = require('./helpers/create-window.js')
const { app } = require('electron')
const contextMenu = require('electron-context-menu')

const resolveConfig = require('tailwindcss/resolveConfig')
const tailwindConfig = require('../tailwind.config.js')
const fullTailwindConfig = resolveConfig(tailwindConfig)

try {
  require('electron-reloader')(module)
} catch {}

contextMenu({
  showSearchWithGoogle: false,
  showCopyImage: false,
  prepend: (defaultActions, params, browserWindow) => [
    {
      label: 'its like magic 💥',
    },
  ],
})

const isDev = !app.isPackaged

let mainWindow

function loadVitePage(port) {
  mainWindow.loadURL(`http://localhost:${port}`).catch((err) => {
    console.log('VITE NOT READY, WILL TRY AGAIN IN 200ms')
    setTimeout(() => {
      // do it again as the vite build can take a bit longer the first time
      loadVitePage(port)
    }, 200)
  })
}

function createMainWindow() {
  mainWindow = createWindow('main', {
    backgroundColor: fullTailwindConfig.theme.colors.primary[800],
  })
  mainWindow.once('close', () => {
    mainWindow = null
  })

  const port = process.env.PORT || 3333
  if (isDev) {
    loadVitePage(port)
  } else {
    mainWindow.loadFile('dist/index.html')
  }
}

app.once('ready', createMainWindow)
app.on('activate', () => {
  if (!mainWindow) {
    createMainWindow()
  }
})
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
