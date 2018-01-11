import React from 'react'
import ReactDOM from 'react-dom'
import Demo from '../../component/Demo/Demo'
import './css/DemoModule.css'

class DemoModule extends React.Component{

    render(){
        //checkTap={(e)=>this.checkTap(e)}
        return (<div className="DemoModule">
           <Demo />
        </div>)
    }
}
export default DemoModule