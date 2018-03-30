import React,{Component} from 'react';
import Home from '../views/home';
import Index from '../views/index';
import Detail from '../views/detail';
import Cart from '../views/cart';
import Catagory from '../views/catagory';
import Login from '../views/login';
import Mine from '../views/mine';
import Nomatch from '../views/route404/nomatch';
import Register from '../views/register';
import Search from '../views/search/search';
import Result from '../views/result';
import Setting from '../views/setting';
let router = {
    routes:[
        {
            path:'/detail',
            component:Detail 
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/register',
            component:Register
        },
        {
            path:'/setting',
            component:Setting
        },
        {
            path:'/index',
            component:Index,
            children:[
                {
                    path:'/index/home',
                    component:Home  
                },
                {
                    path:'/index/catagory',
                    component:Catagory  
                },
                {
                    path:'/index/cart',
                    component:Cart,
                    authorization:true
                }
                ,
                {
                    path:'/index/mine',
                    component:Mine,
                    authorization:true
                },
                {
                    path:'/index/search',
                    component:Search  
                },
                {
                    path:'/index/result',
                    component:Result  
                }
            ]
        }
    ]
}
export default router