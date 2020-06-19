const createWindow = require('./helpers/create-window.js')
const { app } = require('electron')
const contextMenu = require('electron-context-menu')

const resolveConfig = require('tailwindcss/resolveConfig')
const tailwindConfig = require('../tailwind.config.js')
const fullTailwindConfig = resolveConfig(tailwindConfig)

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

function createMainWindow() {
  mainWindow = createWindow('main', {
    backgroundColor: fullTailwindConfig.theme.colors.primary[800],
  })
  mainWindow.once('close', () => {
    mainWindow = null
  })

  const port = process.env.PORT || 3000
  if (isDev) {
    mainWindow.loadURL(`http://localhost:${port}`)
    // do it again as the vite build can take a bit longer the first time
    setTimeout(() => mainWindow.loadURL(`http://localhost:${port}`), 1000)
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
