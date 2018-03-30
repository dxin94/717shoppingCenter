import React,{Component} from 'react';
import ReactDOM from 'react-dom';
// console.log(process.env);
import {Provider} from 'react-redux';
import store from './store/store';
import router from './router/router.config'; 
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import RouteWrapper from './components/routeWrapper';
import fontset from './utils/fontset';
import Nomatch from './views/route404/nomatch';
import './static/css/reset.css';
import './static/fonts1/iconfont.css';
import './static/css/common.css';
import './static/css/goodsItem.less';
ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
        <Switch>
            <Redirect exact from="/" to="/index/home"></Redirect>
            <RouteWrapper routes={router.routes}></RouteWrapper>
        </Switch>
    </BrowserRouter>
</Provider>,document.getElementById('app'));