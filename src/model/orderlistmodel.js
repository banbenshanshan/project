//schema建立数据表
const  mongoose=require('mongoose')
let Schema = mongoose.Schema;

  let orderlistSchema=new Schema({
//	username:{type:String,required:true},
//	userpass:{type:String,required:true}
	id:{type:String,required:true},
  	ordername:{type:String,required:true},
  	price:{type:Number,required:true},
  	number:{type:Number,required:true},
  	yunfei:{type:Number,required:true},
  	orderprice:{type:Number,required:true},
  	time:{type:String,required:true},
  	listprice:{type:Number,required:true}
  	
  })
  // type 字段类型  required 是否必须
 let orderlistmodel=mongoose.model('orderlist', orderlistSchema);
  //参数1  集合名字  参数2是 schema对象 将schema对象变成model
  module.exports=orderlistmodel