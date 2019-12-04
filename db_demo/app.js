const express=require('express')
const app=express()
const cors=require('cors')
const bodyParser=require('body-parser')

const db=require('./db/db')

const student=require('./api/student')

//配置body-parser中间件
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//允许跨域的中间件设置
app.use(cors());
//使用路由分发的方法
app.use('/api/student',student)


app.listen(8000,()=>{
    console.log('server running at port 8000')
})