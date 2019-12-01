const {app,BrowserWindow,Menu}=require('electron');
const path=require('path');
let win;
function createWin(){
    win=new BrowserWindow({
        width:1000,
        height:600,
        show:false,
        webPreferences:{nodeIntegration:true}
    })
    let template=[
        {
            label:'窗口',
            submenu:[
                {
                    label:'页面放大10%',
                    role:'zoomIn',//zoomIn 放大 zoomOut 缩小
                    icon:'../images/zoomIn.png'
                },
                {
                    label:'页面缩小10%',
                    role:'zoomOut',
                    icon:'../images/zoomOut.png'
                },
                {
                    label:'重置',
                    role:'resetZoom',
                    icon:'../images/resetZoom.png'
                }
            ]
        },
        {
            label:'工具',
            submenu:[
                {
                    label:'显示调试工具',
                    role:'toggleDevTools',
                    icon:'../images/album.png'
                }
            ]
        }
    ];

    //启动应用菜单
    Menu.setApplicationMenu(Menu.buildFromTemplate(template));

    win.loadURL(path.join(__dirname,'src/views/index.html'))
    win.on('ready-to-show',()=>{
        win.show()
    })
    win.on('closed',()=>{
        win=null
    })
}

app.on('ready',createWin);
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