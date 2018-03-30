import React,{Component,PureComponent} from 'react';
import {connect} from 'react-redux';
import mapStateToProps from './state';
import './cart.less';
import mapDispatchToProps from './dispatch';
import CartItem from '../../components/cartItem/cartItem';
class Cart extends PureComponent{
    render(){
        let {cartList,totlaCost,selectAll} = this.props;
        return  <div id="cart">
                    <header>购物车<span className="edit">编辑</span></header>
                    <div className="goods-list">
                        <ul>
                            {
                                cartList.map((item,index)=>{
                                    return <CratItem key={'cartItem' + index} item={item}></CratItem>
                                })
                            }
                        </ul>
                    </div>
                    <footer>
                        <div onClick={()=>{selectedAll}}>全选<span className={"selected-btn iconfont "+(selectAll?'icon-selected':'')}></span></div>
                        <div>总价<span>{totalCost}</span></div>
                    </footer>
                </div>
    }
    componentDidMount(){
        this.props.fetchGoodsList(this.props.history)
    }
    componentDidUpdate(){
        // this.forceUpdate()
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)