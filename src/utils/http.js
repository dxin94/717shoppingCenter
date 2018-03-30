// 本地测试服务器的域名
// npm run dev
let domin  = '';
if(process.env == 'development'){
    domin = 'http://localhost:9000';
}
// npm run build
if(process.env == 'production'){
    domin = 'http://www.lb717.com';
}
let $http={
    get(url,data){
        // console.log(Object.prototype.toString.call(data));
        if(Object.prototype.toString.call(data) != "[object Object]"){
            return {
                then(callback){
                    callback('get请求入参格式不正确，需要传object');
                 return {
                     catch(err){
                         err(new Error('入参格式不正确'));
                     }
                 }   
                }
            };
        }
        let queryString='?';
        for(let i in data){
            queryString+=(i+"="+data[i]+"&")
        }
        url = encodeURIComponent(url + queryString.slice(0,-1));
        return fetch(domin + url,{
            headers:{
                "content-type":"application/json;charset=utf-8"
            }
        }).then(res=>res.json())
    },
    post(url,data){
        if(Object.prototype.toString.call(data) != "[object Object]"){
            return {
                then(callback){
                    callback('get请求入参格式不正确，需要传object');
                 return {
                     catch(err){
                         err(new Error('入参格式不正确'));
                     }
                 }   
                }
            };
        }
        return fetch(domin + url,{
            "body":JSON.stringify(data), //字符串,
            headers:{
                "content-type":"application/json;charset=utf-8",
                "Token":"123123"
            },
            "method":"post"
        }).then(res=>res.json())
    },
    jsonp(url,callbackName){
        return new Promise((resolve,reject)=>{
            window[callbackName] = function (data){
                resolve(data)
            }
            let script = document.createElement('script');
            let body = document.body;
            script.src = url;
            body.appendChild(script);
            })
    }
}
export default $http