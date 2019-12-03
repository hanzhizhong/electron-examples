const {app,BrowserWindow,Tray,Menu,MenuItem}=require('electron');
const path=require('path')
let win;
//let tray;
function createWin(){
    win=new BrowserWindow({
        width:1000,
        height:500,
        show:false,
        webPreferences:{nodeIntegration:true}
    });

    win.loadURL(path.join(__dirname,'views/index.html'))
    win.on('ready-to-show',()=>{
        win.show()
        let tray=new Tray('../images/warning.png');

        tray.setToolTip('hello world')
        tray.setContextMenu(Menu.buildFromTemplate([{label:'退出',role:'close'}]));
    })
    win.on('closed',()=>{
        win=null
    })
}
let tray2=null;
app.on('ready',()=>{
    createWin()
    tray2=new Tray('../images/test.ico')
    let contextmenu=Menu.buildFromTemplate([
        {
            label:'设置',
            click:()=>{
                dialog.showMessageBox(win,{
                    title:'设置',
                    buttons:['确定','取消'],
                    message:'设置内容'
                })
            }
        },
        {
            label:'关于',
            role:'about'
        },
        {
            label:'帮助',
            role:'help'
        },
        {
            label:'退出',
            role:'close'
        }
    ]);
    tray2.setContextMenu(contextmenu);
    tray2.setToolTip('这是一个托盘应用');
});
app.on('window-all-closed',()=>{
    if(process.platform!="drawin"){
        app.quit()
    }
});

app.on('activate',()=>{
    if(win==null){
        createWin()
    }
})