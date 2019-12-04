//数据库的链接
const mongoose=require('mongoose')
//数据库的配置文件config
const config=require('../config/config')
mongoose.connect(`mongodb://${config.db.address}:${config.db.port}/${config.db.name}`,{useNewUrlParser:true,useUnifiedTopology:true})

let db=mongoose.connection;

db.on('error',(err)=>{
    console.error(`数据库链接错误:${err}`)
})
db.once('open',()=>{
    console.log('数据库链接成功了')
})