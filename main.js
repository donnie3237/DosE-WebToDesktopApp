const { app, BrowserWindow,ipcMain} = require('electron')
const path = require('path')
const { electron } = require('process')
const ipc = ipcMain

function createWindow () {
  const win = new BrowserWindow({
    // yourWindowSizeBelow ขนาดเริ่มต้นที่นี่
    width: 720,
    height: 550,
    // YourMin-Max width 
    maxWidth:1280,
    minWidth:600,
    // YourMin-Max height 
    minHeight:500,
    maxHeight:1080,
    // Delete This line below if you dont want to make Your Bar by Yourself  ลบบรรทัดข้างล่างถ้าไม่ต้องการสร้างแท็บหัวเอง
    titleBarStyle:'hidden',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      devTools:true,
      nodeIntegration:true,
      contextIsolation:false
    },
    // ICon Path ที่กำหนดพาธของไอคอนแอพ
    icon:"./assets/logo.jpg"
})
  win.loadFile('./public/index.html')
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