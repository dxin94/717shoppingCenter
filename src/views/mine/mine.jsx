import React,{Component} from 'react';
class Mine extends Component{
    constructor(){
        super()
        this.toSetting = this.toSetting.bind(this);
    }
    render(){
        return  <div id=""mine>
                    <header>
                        <p>
                            <span className="iconfont" onClick={this.toSetting}></span>
                            <span>我的717商城</span>
                        </p>
                        <dl>
                            <dt><img src={require('../../static/img/userInfo.png')} /></dt>
                            <dd>user name</dd>
                        </dl>
                    </header>
                </div>
    }
    toSetting(){
        this.props.history.push('./setting')
    }
}
export default Mine