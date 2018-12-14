const mongodb = require('mongodb');

// 获取Mongo客户端
const MongoClient = mongodb.MongoClient;

MongoClient.connect('mongodb://localhost:8012',(err, database)=>{
    //连接成功后执行这个回调函数
    if(err) throw err;

    // 使用某个数据库，无则自动创建
    let db = database.db('shuju');

    let user = db.collection('user');

    let username = ['luyu','xixi','123'];
    let userpass = [888,666,456];

    let data = []
    for(var i=0;i<5;i++){
        data.push({
            username:`用户${i}`,
            userpass:allAges[parseInt(Math.random()*allAges.length)],
            gender:allgenders[parseInt(Math.random()*allgenders.length)],
            reg_time:Date.now()
        })
    }

    // 插入
    // user.insertMany(data,(err, result)=>{
    //     // result:插入数据成功的信息
    //     //  * ops  插入的所有数据（带id）
    //     //  * insertedCount  插入的数量
    //     console.log(result)
    // });

    // 删除
    // user.deleteOne({name:'用户1'},(err,result)=>{
    //     console.log(result)
    // });

    // 修改数据
    // user.updateOne({
    //     name:'用户2'
    // },{$set:{name:'lemon'}},(err,result)=>{
    //     console.log(result);
    // });


    // 查询
//  user.find({gender:'女'}).toArray((err,result)=>{
//      // result：数据查询结果
//      console.log(result)
//  })

})