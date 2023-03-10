const { contextBridge,ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('file', {
  write: (name,str) => ipcRenderer.invoke('write',name,str),
  bookClick:(id) => ipcRenderer.invoke('bookClick',id),
  load:(a)=>ipcRenderer.invoke('load',a)
})
 