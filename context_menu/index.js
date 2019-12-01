const {app,BrowserWindow}=require('electron');

let win;
function createWin(){
    win=new BrowserWindow({
        width:1000,
        height:680,
        show:false,
        webPreferences:{nodeIntegration:true}
    });
    win.webContents.openDevTools()
    win.loadFile('index.html')
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