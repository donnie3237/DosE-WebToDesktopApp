const { app, BrowserWindow,ipcMain} = require('electron')
const path = require('path')
const { electron } = require('process')
const ipc = ipcMain

function createWindow () {
  const win = new BrowserWindow({
    width: 720,
    height: 550,
    maxWidth:1280,
    minWidth:600,
    minHeight:500,
    maxHeight:1080,
    titleBarStyle:'hidden',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      devTools:true,
      nodeIntegration:true,
      contextIsolation:false
    },
    icon:"./logo.png"
})
  win.loadFile('./index.html')
  ipc.on('close',()=>{
    win.close()
  })
  ipc.on('mini',()=>{
    win.minimize()
  })
  ipc.on('full',()=>{
    win.maximize()
  })
}
app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})