import React,{Component} from 'react';
import $http from '../../utils/http';
import RouteWrapper from '../../components/routeWrapper';
import {NavLink} from 'react-router-dom';
import './index.less';
import {ToastContainer} from 'react-toastify';
import Toast from 'react-toast-mobile';
import 'react-toast-mobile/lib/react-toast-mobile.css';
class Index extends Component{
    render(){
        let {routes} = this.props;
        console.log(routes)
        return  <div id="index">
                    <Toast />
                    <div className="content">
                        <RouteWrapper routes={routes}></RouteWrapper>
                    </div>
                    <ul className="nav">
                        <li>
                            <NavLink to="/index/home" activeClassName="tab-active">
                                <span className="iconfont">&#xe6b8;</span>
                                <span>首页</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/index/catagory" activeClassName="tab-active">
                                <span className="iconfont">&#xe67c;</span>
                                <span>分类</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/index/cart" activeClassName="tab-active">
                                <span className="iconfont">&#xe6af;</span>
                                <span>购物车</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/index/mine" activeClassName="tab-active">
                                <span className="iconfont">&#xe62e;</span>
                                <span>我的</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
    }
    componentDidMount(){
        $http.get("/server/test.json",{id:2,name:"lucy"})
        .then(data=>{console.log(data)})
        .catch(err=>{console.log(err)})
    }
}
export default Index