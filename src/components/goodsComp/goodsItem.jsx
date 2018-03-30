import React,{Component} from 'react';
import $http from '../../utils/http';
import Lazyload from 'react-lazyload';
import {getCookie} from '../../utils/utils';
import {ToastContainer,toast} from 'react-toastify';
import {connect} from 'react-redux';
import {ADD_CART} from './../../store/reducers';
class Placeholder extends Component{
    render(){
        return  <img src={require('../../static/img/im1.jpg')} />
    }
}
class GoodsItem extends Component{
    constructor(){
        super()
        this.addCart = this.addCart.bind(this);
    }
    render(){
        let {data} = this.props;
        return  <dl className="goods_item" onClick={()=>{this.toDetail(data.goods_id)}}>
                    <dt><Lazyload overflow once height={"100%"} placeholder={<Placeholder></Placeholder>} debounce={100}><img src={"http://www.lb717.com/" + data.obj_data} /></Lazyload></dt>
                    <dd>
                        <p className="goods-detail">{data.goods_name}</p>
                        <p>
                            <span className="goods-price">{data.discount_price}</span>
                            <span className="iconfont" onClick={this.addCart}>&#xe6af;</span>
                        </p>
                        <ToastContainer />
                    </dd>
                </dl>
    }
    addCart(e){
        e.stopPropagation();
        let {data} = this.props;
        if(getCookie('token')){
            $http.post('/user/Cart/addCart',{
                goods_id:data.goods_id,
                goods_info:data,
                token:getCookie('token')
            })
            .then((res)=>{
                console.log(res);
                if(res==1){
                    toast.success('购物车添加成功',{
                        position:toast.POSITION.TOP_CENTER
                    });
                    this.props.dispatch({
                        type:ADD_CART,
                        data:{
                            ...data,
                            count:1,
                            selected:0
                        }
                    })
                } else{
                    toast.warn(res.info,{
                        position:toast.POSITION.TOP_CENTER,
                        hideProgressBar:true,
                        autoClose:2000,
                        className:"test"
                    });
                    let {history,location} = this.props; 
                    history.push('/login',{
                        from:location.pathname
                    })
                }
            })
        } else{
            let {history,location} = this.props; 
            history.push('/login',{
                from:location.pathname
            })
        }
    }
    toDetail(goods_id){
        console.log(goods_id)
        this.props.history.push('/detail',{
            goods_id:goods_id
        })
    }
}
export default connect(null)(GoodsItem)