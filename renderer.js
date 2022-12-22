const {ipcRenderer} =require('electron');
const ipc =ipcRenderer;
const closeApp =document.getElementById('closeApp');
const minApp =document.getElementById('minApp')
const fullApp  =document.getElementById('full-App')

// close the app
closeApp.addEventListener('click',()=>{
    ipc.send('close')
})
// app in min size
minApp.addEventListener('click',()=>{
    ipc.send('mini')
})
// app in full size
fullApp.addEventListener('click',()=>{
    ipc.send('full')
})
