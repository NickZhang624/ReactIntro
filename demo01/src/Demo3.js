import React, { Component} from 'react'
import {CSSTransition} from 'react-transition-group'
import './style.css'

class Demo3 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow2:true
         }
         this.toClick2=this.toClick2.bind(this)
    }
    render() { 
        return (
            <div>
                <CSSTransition
                in={this.state.isShow2}
                timeout={2000}
                //classnames, NOT classname
                classNames="text"
                unmountOnExit
                >
                <div>Demo333</div>
                </CSSTransition> 
                <div><button onClick={this.toClick2}>Click2</button></div>
            </div>
         );
    }

    toClick2(){
        this.setState({
            isShow2:this.state.isShow2?false:true
        })
    }
}
 
export default Demo3;