import React,{Component} from 'react';
class Detail extends Component{
    render(){
        return <h1>detail</h1>
    }
    componentDidMount(){
        console.log(this.props)
    }
}
export default Detail