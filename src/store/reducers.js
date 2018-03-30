import {combineReducers} from 'redux';
// 添加购物车
export const ADD_CART = 'ADD_CART';

// 删除商品
export const DELEST_CART = 'DELEST_CART';

// 改变商品数量
export const UPDATE_GOODS_COUNT = 'UPDATE_GOODS_COUNT';

//改变商品选中与否
export const UPDATE_GOODS_SELECTED = 'UPDATE_GOODS_SELECTED';

// 更新整个商品列表
export const UPDATE_GOODS_LIST = 'UPDATE_GOODS_LIST';

//设置全选
export const SELECTED_ALL = 'SELECTED_ALL';

let initState={
    cart_list:[]
}



function cart_list(state=initState.cart_list,action){
    switch(action.type){
        case ADD_CART:
        let flag = false;// 新加的商品购物车里面没有
        state.forEach((item,index) =>{
            if(item.goods_id == action.data.goods_id){
                ++item.count;
                flag = true;
            }
            return flag? [...state] : [...state,acion.data];
        })
        break;
        case UPDATE_GOODS_COUNT:
        let arr = [...state];
        arr.forEach(item=>{
            if(item.goods_id == action.id){
                item.count = action.data
            }
        });
        return arr;
        break;
        case UPDATE_GOODS_SELECTED:
        let arr2 = [...state];
        arr2.forEach(item=>{
            if(item.goods_id == action.id){
                item.selected = action.data
            }
        });
        return arr2;
        case UPDATE_GOODS_LIST:
        return action.data;
        case SELECTED_ALL:
        let arr3 = [...state];
        arr3.forEach(item=>{
            item.selected=1;
        }); 
        return arr3;
        default:return state
    }
    return state
}
export default combineReducers({
    cart_list
})