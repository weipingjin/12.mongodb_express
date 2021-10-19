//引入express框架
const express = require('express');
//创建网站服务器
const app = express();

app.get('/index',(req,res)=>{
    res.send(req.query)
})


//监听窗口
app.listen(3000);
