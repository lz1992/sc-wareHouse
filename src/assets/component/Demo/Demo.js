import React from 'react'
import ReactDOM from 'react-dom'
import './css/Demo.css'
import TouchClickAnimate from '../TouchClickAnimate/TouchClickAnimate'

class Demo extends React.Component{

    state={
        list:[
            "李四",
            "张三",
            "王武"
        ]
    }
    componentDidMount(){
        TouchClickAnimate.animateInit()
    }

    addDom=()=>{
        let {list}=this.state
        list.push("周期")
        this.setState({list})
    }

   
    listItemClick=(index)=>{
        console.log(index)
    }
    render(){
        //checkTap={(e)=>this.checkTap(e)}
        return (<div className="Demo">
           Demo Component
           
           <div className="tap_animate_Content"><img className="tap_animate ts-btn" src="./assets/Demo/桌面.jpg" style={{width:190,height:190}}/></div>
           <div className="tap_animate_Content"><button className="tap_animate ts-btn" onTouchStart={()=>this.addDom()} >添加</button></div>
           <div className="tap_animate_Content"><span className="tap_animate ts-btn" >asd as </span></div>
           <ul className="tap_animate_Content">
               {this.state.list.map((item,index)=>{
                   return <li className="tap_animate ts-btn" onTouchStart={()=>this.listItemClick(index)}>{item}</li>
               })}
           </ul>
        </div>)
    }
}
export default Demo