const {app,BrowserWindow}=require('electron')
const path=require('path')

let win=null;

function createWin(){
    win=new BrowserWindow({
        width:1000,
        height:500,
        show:false,
        webPreferences:{nodeIntegration:true}
    })
    win.loadURL(path.join(__dirname,'views/index.html'))
    win.on('ready-to-show',()=>{
        win.show()
    })
    win.on('closed',()=>{
        win=null
    })
}

app.on('ready',createWin)
app.on('window-all-closed',()=>{
    if(process.platform!='drawin'){
        app.quit()
    }
});

app.on('activate',()=>{
    if(win==null){
        createWin()
    }
})