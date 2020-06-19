const path = require('path')
const srcPath = path.resolve(__dirname, 'src')

module.exports = {
  open: false, // do not open the broser as we use electron
  alias: {
    // setup aliases for cleaner imports
    '/~/': srcPath,
  },
  optimizeDeps: {
    // exclode path and electron-window-state as we are using the node runtime inside the browser
    // and dont wont vite to complain. If you have any issues importing node packages and vite complains,
    // add them here
    exclude: ['path', 'electron-window-state'],
  },
}
