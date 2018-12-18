const express = require('express');
let Router = express.Router();
//显示最新10条信息
const orderlistmodel = require('../model/orderlistmodel.js');
const util=require('../utils/utli.js');
Router.get('/orderlist',(req,res)=>{
    res.send('goods list')
});

let obj={}
Router.post('/',(req,res)=>{
	orderlistmodel.find()
	.then((data)=>{
		res.send(util.sendData(0,'请求ok',data))
	})
	.catch((err)=>{
		res.send(util.sendData(-1,'请求错误',null))
	})
})

//添加数据到数据表
Router.post('/addlist',(req,res)=>{
	let insertData={ordername:'苹果',price:120,number:1,yunfei:10,orderprice:130,time:'2018-1-15',listprice:130}
	orderlistmodel.insertMany(insertData);
	.then((data)=>{
		res.send(util.sendData(0,'请求ok',data))
	})
	.catch((err)=>{
		res.send(util.sendData(-1,'请求错误',null))
	})
})

//删除数据
Router.post('/dellist',(req,res)=>{
	let id=req.body.id//拿到id
	if (!id) {res.send(util.sendData(-1,'参数错误',null))}
	orderlistmodel.deleteOne({id:id})
	.then((data)=>{
	 res.send(util.sendData(0,'删除成功',data))
	})
	.catch((err)=>{
		res.send(util.sendData(-1,'删除失败',null))
	})
})



// RESTful风格api
//Router.route('/:id')
//  .get((req,res)=>{
//      res.send({
//          path:'获取商品信息',
//          username:req.params.id
//      })
//  })
//
//  .post((req,res)=>{
//      res.send({
//          path:'修改商品信息',
//          username:req.params.id
//      })
//  })
//
//  .put((req,res)=>{
//      res.send({
//          path:'添加商品',
//          username:req.params.id
//      })
//  })
//
//  .delete((req,res)=>{
//      res.send({
//          path:'删除商品',
//          username:req.params.id
//      })
//  })
//
//
module.exports = Router;