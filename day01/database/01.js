//引入mongoose第三方模块 用来操作数据库
const { kStringMaxLength } = require('buffer');
const mongoose = require('mongoose');
//数据库连接
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true })
    //连接成功
    .then(() => console.log('数据库连接成功'))
    //连接失败
    .catch(err => console.log(err, '数据库连接失败'))