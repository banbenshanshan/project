	

// 引入配置文件
const {port,host,root} = require('./config');
const express = require('express');
// 引入路由文件
const Router = require('./router');
const orderlist=require('./router/user.js')
let app = express();

// 利用中间件实现静态资源服务器
app.use(express.static(root));

// 路由
app.use(Router);
app.use('/api/orderlist',orderlist);
app.use('/api/addlist',orderlist);
//app.use('/api/order',orderlist);
app.listen(port,()=>{
    console.log(`server is running on http://${host}:${port}`);
})