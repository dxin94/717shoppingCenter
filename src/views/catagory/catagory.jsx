import React,{Component} from 'react';
import './catagory.less';
import $http from '../../utils/http';
class Catagory extends Component{
    constructor(){
        super()
        this.state={
            activeIndex:0
        }
        this.toogleActive = this.toogleActive.bind(this);
    }
    render(){
        let catList = ['家乡味道','进口食品','牛奶乳品','休闲零食','生鲜果蔬','米面粮油','调味调料','酒水饮料'];
        return  <div id="catagory">
                    <header><input type="text"/></header>
                    <div className="catagory-wrap">
                        <div className="left-side">
                            <il>
                                {
                                    catList.map((item,index) =>{
                                        return  <li className={this.state.activeIndex==index?'catagory-active':''} key={index} onClick={()=>{this.toogleActive(index)}}>{item}</li>
                                    })
                                }
                            </il>
                        </div>
                        <div className="right-side">

                        </div>
                    </div>
                </div>
    }
    toogleActive(idx){
        $http.get('/mobile/Catagory/catagorySon',{sonid:idx+1}).then((res)=>{
            console.log(res);
        })
        let url = 'https://ewudice8yricjrefdi';
        let url_men = 'https://ewudice8yricjrefdi';
        $http.jsonp(url,'mtopjsonp4').then(res=>{console.log(res);});
        $http.jsonp(url_men,'mtopjsonp5').then(res=>{console.log(res);})
        this.setState({
            activeIndex:idx
        })
    }
}
export default Catagory