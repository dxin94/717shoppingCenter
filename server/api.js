const jwt = require('jsonwebtoken');
const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const Mock = require('mock');

function queryApi(url,methods,params){
    return new Promise((resolve,reject)=>{
        let data = '';
        const options = {
            hostname: 'www.lb717.com',
            port: 80,
            path: url,
            method: methods,
            hraders: {
                'Content-Type': 'application/x-www-from-urlencoded;charset=UTF-8'
            }
        };
        let request = http.request(options, (response) => {
            response.setEncoding('utf8');
            response.on('data', (chunk) => {
                data += chunk;
            })
            response.on('end', () => {
                resolve(JSON.stringify(data))
            })
        })
        if(methods.toLowercase() == 'post'){
            request.write(querystring.stringify(params));
        }
        request.end()
    })
    
}

module.exports = function (app) {
    // 商品列表接口
    app.post('/mall/index/getGoodsChannel', function (req, res) {
        queryApi('/mall/index/getGoodsChannel','post',req.body)
        .then((data)=>{
            res.end(data)
        })
    }) 

    // 注册接口
    app.post('/user/register', function (req, res) {
        console.log(req.body);
        let user = fs.readFileSync('user.json', { encoding: "utf-8" })
        console.log(user);
        user = JSON.parse(user);
        user.push(req.body);
        fs.writeFile('./user.json', JSON.stringify(user), function () {
            res.end(JSON.stringify({
                "success": 1,
                "info": "register success"
            }))
        });

    })

    //login api
    app.post('/user/login', function (req, res) {
        console.log(req.body)
        let user = fs.readFileSync('user.json', { encoding: "utf-8" })
        console.log(user);
        user = JSON.parse(user);
        let login = req.body;
        let resInfo = {
            success: 0,
            info: "用户名或密码错误",
            token: ""
        }
        user.forEach(usr => {
            if (usr.username == login.username && usr.password == login.password) {
                resInfo.success = 1;
                resInfo.info = "login success"
            }
        })

        if (resInfo.success == 1) {
            resInfo.token = jwt.sign(login, "1511", {
                expiresIn: 60
            })
        }

        res.end(JSON.stringify(resInfo))
    })

    // 添加购物车
    app.post('/user/Cart/addCart', function (req, res) {
        console.log(req.body);
        jwt.verify(req.body.token, "1511", (err, decoded) => {
            if (err) {
                res.end(JSON.stringify({
                    info: "登录超时，请重新登录",
                    detail: err.TokenExpiredError
                }));
            } else {
                console.log(decoded);
                let cartInfo = JSON.parse(fs.readFileSync(__dirname + '/cart_info.json', { encoding: 'utf-8' }))
                if (cartInfo[decoded.username]) {
                    let recordList = cartInfo[decoded.username];
                    let flag = false; // 新加商品
                    recordList.forEach((ietm,index)=>{
                        if(item.goods_id == req.body.goods_info.goods_id){
                            ++item.count;
                            flag = true;// 重复商品
                        }
                    })
                    if(!flag){
                        let record = req.body.goods_info;
                        record.count = 1;
                        record.selected = 0;
                        cartInfo[decoded.username].push(record);
                    }
                } else {
                    let record = req.body.goods_info;
                    record.count = 1;
                    record.selected = 0;
                    cartInfo[decoded.username] = [record];
                }
                fs.writeFile(__dirname + '/cart_info.json', JSON.stringify(cartInfo), function () {
                    res.end('1');
                });

            }
            console.log(decoded);
        })

    })

    //分类接口
    app.get('/mobile/Catagory/catagorySon', function (req, res) {
        let tbdata = 'http://localhost:3000/';
        queryApi(tbdata,'get')
        .then(data=>{
            
        })
        res.json(data);
    })

    // 登录过后获取购物车的商品记录
    app.post('/user/Cart/goodsList',function (req,res){
        console.log(req.body);
        jwt.verify(req.body.token, "1511", (err, decoded) => {
            if (err) {
                res.end(JSON.stringify({
                    info: "登录超时，请重新登录",
                    detail: err.TokenExpiredError,
                    error:1
                }));
            } else{
                try{
                    let goodsRecord = JSON.parse(fs.readFileSync('./cart_info.json',{encoding:'utf-8'}));
                    res.json(goodsRecord[decoded.username]);
                }
                catch(error){
                    res.json(error);
                }
            }
        })
    })

    // 删除购物车指定商品
    app.post('/user/Cart/delGoods',function (req,res){
        let cartRecord = JSON.parse(fs.readFileSync('./cart_info.json',{encoding:'utf-8'}));
        jwt.verify(req.body.token,'1511',function(err,decoded){
            if(err){
                res.json(err);
            } else{
                let cartList = cartRecord[decoded.username];
                let delGoods = _.remove(cartList,function (item){
                    return req.body.selectedID.indexOf(item.goods_id)>-1
                })
                cartRecord[decoded.username] = cartList;
                fs.writeFile(__dirname + '/cart_info.json',JSON.stringify(cartRecord),function(){
                    res.json({
                        success:1,
                        info:'删除成功',
                        delGoods:delGoods,
                        leftGoods:cartList
                    })
                })
            }
        })
    })

}