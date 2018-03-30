export function getCookie(name){
    let cookieStr = document.cookie;
    if(cookieStr.length == 0) return;
    let arr;
    let res = null;
    if(cookieStr.indexOf(';')>-1){
        arr = cookieStr.split('; ');
        rr.forEach((cookie,index) => {
            let tmp_arr = cookie.split('=');
            if(tmp_arr[0] == name){
                res = tmp_arr[1]
            }
        })
    } else{
        let tmp_arr = cookieStr.split('=');
        if(tmp_arr[0] == name){
            res = tmp_arr[1]
        }
    }
    return res
}

/* //jsonp跨域封装
// 动态创建script标签，添加到body，src指定接口地址，准备callabck name
let o1 = {
    appkey:'12574478',
    t:'152232846',
    sign:'a5362783rdgsszf8a7dsfsdi',
    api:'sdjkf.dihsgcs.shdf.sdhvbsi.shb',
    v:'2.0',
    type:'jsonp',
    dataType:'jsonp',
    callback:'mtopjsonp2',
    data:'{"appId":"3113","vm":"nw"}'
}
let o2 = {
    appkey:'12574478',
    t:'2345876',
    sign:'astdfuf08f7sddchv5a87as',
    api:'sdjkf.dihsgcs.shdf.sdhvbsi.shb',
    v:'2.0',
    type:'jsonp',
    dataType:'jsonp',
    callback:'mtopjsonp4',
    data:'{"appId":"3113","vm":"nw"}'
} */
export function loginout(){
    let t = new Date();
    t.setTime(t.getTime()-1);
    document.cookie = "token="+getCookie('token')+'; expirs='+t.UTCString();
}