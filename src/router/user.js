const express = require("express");
const mongodb = require('mongodb');
const bodyParser = require("body-parser")

// 获取Mongo客户端
const MongoClient = mongodb.MongoClient;

let Router = express.Router();
let urlencoded = bodyParser.urlencoded({ extended: false });

// 用户登录
Router.post('/',urlencoded,(req,res)=>{
    // console.log("req.body",req.body);
    let {username,userpass} = req.body;
    userpass=isNaN(userpass)?userpass:userpass*1;
     username=isNaN(username)?username:username*1;//三目判断是否为数字类型
     console.log(username,userpass);
    MongoClient.connect('mongodb://localhost:27017',(err, database)=>{
        //连接成功后执行这个回调函数
        if(err) throw err;

        // 使用某个数据库，无则自动创建
        let db = database.db('test');

        // 使用集合
        let user = db.collection('user');

        // 查询是否存在数据
        // console.log(username,password);
        user.findOne({username,userpass:userpass},(err,result)=>{
            console.log(result);
            if(result){
                // 登录成功后，给前端发送用户表示：token
                res.send({
                    code:1,
                    data:result,
                    msg:'ok'
                })
            }else{
                res.send({
                    code:0,
                    data:[],
                    msg:'fail'
                })
            }
        });

        // 关闭数据库，避免资源浪费
        database.close();

    });
});

module.exports = Router;
