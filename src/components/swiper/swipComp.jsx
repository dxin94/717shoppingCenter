import React,{Component} from 'react';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';
import './swiper.less';
console.log(Swiper);
let img2 = require('../../static/img/im3.jpg');
class SwiperComponent extends Component{
    render(){
        return  <div className="swiper-container" ref="scDom">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide"><img src={require('../../static/img/im1.jpg')}/></div>
                        <div className="swiper-slide"><img src={img2}/></div>
                        <div className="swiper-slide"><img src={require('../../static/img/im2.jpg')}/></div>
                        <div className="swiper-slide"><img src={img2}/></div>
                    </div>
                </div>
    }
    componentDidMount(){
        new Swiper('.swiper-container',{
            autoplay:true,
            loop:true
        })
    }
}
export default SwiperComponent