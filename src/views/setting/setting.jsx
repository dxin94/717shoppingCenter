import React,{Component} from 'react';
import {loginout} from '../../utils/utils';
//import Dialog from './../../components/dialog';
class Setting extends Component{
    constructor(){
        super()
        this.state = {
            flag:false
        }
        this.loginout = this.loginout.bind(this);
        this.close = this.close.bind(this);
        this.callback = this.callback.bind(this);
    }
    render(){
        let {flag} = this.state;
        return  <div id="setting">
                    <header>设置</header>
                    <button className="logout" onClick={this.loginout}>退出登录</button>
                </div>
    }
    loginout(){
        loginout();
        this.props.history.push('./index/home');
    }
}
export default Setting