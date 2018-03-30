import React,{Component} from 'react';
import './search.less';
class Search extends Component{
    constructor(){
        super()
        this.state={
            historylist:[]
        }
        this.toSearch = this.toSearch.bind(this);
        this.clearHistory = this.clearHistory.bind(this);
    }
    render(){
        let {historylist} = this.state;
        return  <div id="search">
                    <header><input type="text" ref="keyWords"/><button onClick={this.toSearch}>搜索</button></header>
                    <section className="recent-search">
                        <p>最近搜索   <span onClick={this.clearHistory} className="iconfont">&#xe6a6;</span></p>
                        {
                            historylist.length == 0 ?<p>暂无搜索记录...</p> :
                            <ul>
                                {this.state.historylist.map((item,index) => {
                                    return  <li key={index} onClick={()=>{this.toReault(item)}}>{item}</li>
                                })}
                            </ul>
                        }
                    </section>
                    <section className="common-search">
                        <p>大家都在搜索</p>
                        <ol>
                            <li>巧克力</li>
                        </ol>
                    </section>
                </div>
    }
    clearHistory(){
        localStorage.removeItem('SearchHistorh');
        this.setState({
            historylist:[]
        })
    }
    toSearch(){
        if(!this.refs.keyWords.value) return;
        let keyWords = this.refs.keyWords.value;
        let ls = localStorage;
        if(ls.geetItem('SearchHistorh')){
            let shArr = JSON.parse(ls.geetItem(''));
            if(shArr.indexOf(keyWords) > -1) return;
            shArr.push(keyWords);
            ls.setItem('SearchHistorh',JSON.stringify(shArr));
            
        } else{
            ls.setItem('SearchHistorh',JSON.stringify(keyWords))
        }
        this.props.history.push('index/result',{
            key_words:this.refs.keyWords.value
        });
    }
    toReault(keyWords){
        this.props.history.push('index/result',{
            key_words:this.refs.keyWords.value
        });
    }
    componentDidMount(){
        if(localStorage.getItem('SearchHistorh')){
            this.setState({
                historylist:JSON.parse(localStorage.getItem('SearchHistorh'))
            })
        }
    }
}
export default Search