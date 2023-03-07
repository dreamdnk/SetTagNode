const { app, BrowserWindow,Menu,globalShortcut,ipcMain } = require('electron')
const path = require('path')
//const fs = require('fs')
const fileAct = require('./node/fileAct.js')

Menu.setApplicationMenu(null)
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
	backgroundColor: '#DADADA',
	icon:'favicon.ico',
	webPreferences: {
	      preload: path.join(__dirname, 'node/preload.js'),
	},
  })

  win.loadFile('web/html/index.html')//载入主页
  globalShortcut.register('alt+f12', () => {//快捷键打开控制台
  	win.toggleDevTools()
  })
  
  ipcMain.handle('write', (b)=>{fileAct.write(b,1)})
}

app.whenReady().then(() => {
  createWindow()//创建渲染窗口
  app.on('activate', () => {//mac系统上的兼容
    if (BrowserWindow.getAllWindows().length === 0) {
	  createWindow();
    }
  })
})

app.on('window-all-closed', () => {//关闭时退出进程
  if (process.platform !== 'darwin') app.quit()
})
