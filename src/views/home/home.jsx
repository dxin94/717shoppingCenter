import React,{Component} from 'react';
import $http from '../../utils/http';
import './home.less';
import SwiperComponent from '../../components/swiper/swipComp';
import GoodsItem from '../../components/goodsComp/goodsItem';
class Home extends Component{
    constructor(){
        super()
        this.state={
            goodslist:[],
            channel_id:1,
            caniquery:true
        }
        this.toSearch = this.toSearch.bind(this);
        this.scrolling = this.scrolling.bind(this);
    }
    toSearch(){
        // console.log(this.props)
        let {history} = this.props;
        history.push('/index/search')
    }
    render(){
        return  <div id="home" onScroll={this.scrolling} ref="scroller">
                    <div ref="doc">
                        <header><input type="text" onFocus={this.search}/></header>
                        <SwiperComponent></SwiperComponent>
                        <section className="home-act">
                            <dl>
                                <dt><i className="iconfont icon-shuidianmei"></i></dt>
                                <dd>家乡味道</dd>
                            </dl>
                            <dl>
                                <dt><i className="iconfont icon-shuidianmei"></i></dt>
                                <dd>进口食品</dd>
                            </dl>
                            <dl>
                                <dt><i className="iconfont icon-shuidianmei"></i></dt>
                                <dd>家乡味道</dd>
                            </dl>
                            <dl>
                                <dt><i className="iconfont icon-shuidianmei"></i></dt>
                                <dd>进口食品</dd>
                            </dl>
                            <dl>
                                <dt><i className="iconfont icon-shuidianmei"></i></dt>
                                <dd>家乡味道</dd>
                            </dl>
                            <dl>
                                <dt><i className="iconfont icon-shuidianmei"></i></dt>
                                <dd>进口食品</dd>
                            </dl>
                            <dl>
                                <dt><i className="iconfont icon-shuidianmei"></i></dt>
                                <dd>家乡味道</dd>
                            </dl>
                            <dl>
                                <dt><i className="iconfont icon-shuidianmei"></i></dt>
                                <dd>进口食品</dd>
                            </dl>
                        </section>
                        <div className="goods-list">
                            {this.state.goodslist.map((item,index) =>{
                                return  <GoodsItem key={index} data={item} history={this.props.history} location={this.props.location}></GoodsItem>
                            })
                                
                            }
                        </div>
                    </div>
                </div>
    }
    componentDidMount(){

        $http.post('/mall/index/getGoodsChannel',{channel_id:this.state.channel_id})
        .then(res=>{
            this.setState({
                goodslist:JSON.parse(res).data.data
            })
            console.log(JSON.parse(res));
        })
    }
    scrolling(){
        if(this.state.channel_id > 9) return;
        if(!this.state.caniquery) return;
        let {scroller,doc} = this.refs;
        let st = scroller.scrollTop;
        let sw = scroller.offsetHeight;
        let dh = doc.offsetHeight;
        if (dh-(st+sw) < 50){
            this.setState({
                caniquery:false
            })
            this.setState({
                channel_id:++this.state.channel_id
            })
            let {goodslist} = this.state;
            $http.post('/mall/index/getGoodsChannel',{channel_id:this.state.channel_id})
            .then(res=>{
                this.setState({
                    goodslist:[...goodslist,...JSON.parse(res).data.data]
                })
                this.setState({
                    caniquery:true
                })
            })
        }
    }
}
export default Home