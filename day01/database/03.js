//引入mongoose第三方模块 用来操作数据库
const mongoose = require('mongoose');
//数据库连接
mongoose.connect('mongodb://localhost/playground', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    //连接成功
    .then(() => console.log('数据库连接成功'))
    //连接失败
    .catch(err => console.log(err, '数据库连接失败'))
    //创建集合规则
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String
});
//使用规则创建集合
//1,集合名称
//2，集合规则
const User = mongoose.model('User', userSchema) // courses

const user = new User({
    name: "王五",
    age: 30,
    email: "hhh@163.com",
    password: "123"
});
//将文档插入到数据库中
user.save();