const {app,BrowserWindow,Menu,MenuItem}= require('electron')
const path=require('path');
let win;

function createWin(){
    win=new BrowserWindow({
        width:1000,
        height:580,
        show:false,
        webPreferences:{nodeIntegration:true}
    });

    let template=[
        {
            label:'编辑',
            submenu:[
                {
                    label:'重做',
                    role:'undo'
                },
                {
                    label:'增加',
                    click:()=>{
                        win.webContents.insertText('增加')
                    }
                },
                {
                    label:'删除',
                    click:()=>{
                        win.webContents.insertText('删除')
                    }
                },
                {
                    label:'修改',
                    click:()=>{
                        win.webContents.insertText('修改')
                    }
                },
                {
                    type:'separator',
                },
                {
                    label:'搜索',
                    click:()=>{
                        win.webContents.insertText('搜索')
                    }
                }
            ]
        }
    ];

    Menu.setApplicationMenu(Menu.buildFromTemplate(template));

    win.loadURL(path.join(__dirname,'src/views/index.html'));
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
