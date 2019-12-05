const express = require('express')
const router = express.Router();

const Student = require('../model/student')

router.get('/test', (req, res) => {
    res.json({
        err: 0,
        msg: '链接成功的测试接口'
    })
})

//增加学生
router.post('/add', (req, res) => {
    Student.findOne(req.body).then(ret => {
        if (ret != null) {
            res.json({
                err: 1,
                msg: '学生已经存在了'
            })
            return
        }
        new Student(req.body).save().then(ret => {
            res.json({
                err: 0,
                msg: 'success'
            })
        }).catch(err => {
            res.json({
                err: 999,
                msg: `未知错误：${err}`
            })
        })
    })
});

//删除学生
router.delete('/delete', (req, res) => {
    let {_id} = req.query;
    Student.deleteOne({_id}).then(ret => {
        res.json({
            err:0,
            msg:'删除成功',
            data:ret
        })
    }).catch(err => {
        res.json({
            err: 999,
            msg: `未知错误：${err}`
        })
    })
});

//查找所有的学生
router.get('/find', (req, res) => {
    Student.find().then(ret => {
        res.json({
            err: 0,
            msg: 'success',
            data: ret
        })
    }).catch(err => {
        res.json({
            err: 999,
            msg: `未知错误:${err}`
        })
    })
});
//条件查询
router.get('/findOne',(req,res)=>{
    let {_id}=req.query;
    Student.findOne({_id}).then(ret=>{
        if(ret!=null){
            res.json({
                err:0,
                msg:'success',
                data:ret
            })
        }else{
            res.json({
                err:1,
                msg:'用户不存在'
            })
        }
    }).catch(err=>{
        res.json({
            err:999,
            msg:`未知错误:${err}`
        })
    })
})

//修改编辑
router.put('/edit',(req,res)=>{
    console.log(req.body)
    let {_id,name,age,gender,classroom}=req.body;
    Student.updateOne({_id},{$set:{name,age:Number(age),gender,classroom}}).then(ret=>{
        if(ret.n==1){
            res.json({
                err:0,
                msg:'修改成功了',
                data:ret
            })
        }else{
            res.json({
                err:1,
                msg:'没有找到对应_id项'
            })
        }

    }).catch(err=>{
        res.json({
            err:999,
            msg:`未知错误:${err}`
        })
    })
})

module.exports = router;