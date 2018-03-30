// import React,{Component} from 'react';
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const api = require('./api');
app.use(bodyParser.json())
// 设置跨域
app.all('*',function (req,res,next){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers","content-type,Token")
    res.header("Content-Type","application/json;charset=utf-8")
    next()
})  
// 启动后端接口
api(app)
app.listen(9000,function (){
    console.log('server listen 3000')
})