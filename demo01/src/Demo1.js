import React,{Component,Fragment} from 'react'
import './style.css'
import DemoItem from './DemoItem.js'
import axios from 'axios'
import Demo2 from './Demo2'
import {CSSTransition, TransitionGroup} from 'react-transition-group'


class Demo1 extends Component{
// Initialization(life cycle)
    constructor(props){
        super(props)
        this.state={
            inputValue:'',
            list:[]
        }
        
    }


    // UNSAFE_componentWillMount(){
    //     console.log("1---UNSAFE_componentWillMount")
    // }

    componentDidMount(){
        console.log("3----componentDidMount")

        axios.get('https://easy-mock.com/mock/5ee6f6635f62a4772f78005d/reactdemo/Demo1')
        .then((res)=>{this.setState({list:res.data.data})})
        .catch((err)=>{console.log(err)})
    }

    //before render
    // shouldComponentUpdate(){
    //     console.log("4---shouldComponentUpdate")
    //     return true
    // }

    // UNSAFE_componentWillUpdate(){
    //     console.log("5----UNSAFE_componentWillUpdate")
    // }

    // componentDidUpdate(){
    //     console.log("6----componentDidUpdate")
    // }

// Mounting
    render(){
        // console.log("2----render")
        return (
            <Fragment>
                <div>
                    <input className="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
                    <button onClick={this.addList.bind(this)}>Add </button></div>
                <div>
                    <ul>
                        <TransitionGroup>
                        {
                            this.state.list.map((item,index)=>{
                            return (

                                <CSSTransition timeout={1000} classNames="text" appear={true} unmountOnExit key={index+item}>

                                {/* The only way pass these attributes that is using <Components attributes={data or this.methods}> */}
                                    <DemoItem key={index+item} content={item} index={index} deleteItem = {this.deleteItem.bind(this)}/>
                            {/* <li onClick={this.deleteItem.bind(this,index)} key={index+item}>{item}</li> */}

                               </CSSTransition>
                                
                            )
                            })
                        }
                        </TransitionGroup>
                    </ul>
                </div>
                <Demo2/>
                </Fragment>
                
                
        )
    }
    inputChange(e){
        this.setState({
            inputValue:e.target.value
        })
    }
    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        })
    }
    deleteItem(index){
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
}

/*
npm install axios Note: download to node_modules without dependency
npm install -g axios Note: system install
npm install -save axios Note: download to node_modules with dependency
npm install -save-dev axios Note: download to node_modules with dependency both in developing and testing IDE
*/

export default Demo1