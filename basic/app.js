const {app,BrowserWindow}=require('electron');

let win
function createWin(){
    win=new BrowserWindow({
        width:1000,
        height:680,
        show:false,
        webPreferences:{nodeIntegration:true}
    });
    win.webContents.openDevTools(true)
    win.loadFile('index.html')
    win.on('ready-to-show',function(){
        win.show()
    })
    win.on('closed',function(){
        win=null
    })
}

app.on('ready',createWin);

app.on('window-all-closed',function(){
    if(process.platform!='drawin'){
        app.quit()
    }
})
app.on('activate',function(){
    if(win==null){
        createWin()
    }
})