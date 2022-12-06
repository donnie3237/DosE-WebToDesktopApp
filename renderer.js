const {ipcRenderer} =require('electron')
const ipc =ipcRenderer
const closeApp =document.getElementById('closeApp')
const minApp =document.getElementById('minApp')
const fullApp =document.getElementById('full-app')
closeApp.addEventListener('click',()=>{
    ipc.send('close')
})
minApp.addEventListener('click',()=>{
    ipc.send('mini')
})
fullApp.addEventListener('click',()=>{
    ipc.send('full')
})