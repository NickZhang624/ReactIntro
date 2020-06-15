import React, { Component, Fragment } from 'react';

class Demo2 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow:true,
            isShow1:true,
            isShow2:true
         }
         this.toClick=this.toClick.bind(this)
         this.toClick1=this.toClick1.bind(this)
         this.toClick2=this.toClick2.bind(this)
    }
    render() { 
        return (
            <Fragment>
              <div>
                <div className={this.state.isShow?'show':'hide'}>Demo2</div>
                <div><button onClick={this.toClick}>Click</button></div>   
            </div>
            <div>
                <div className={this.state.isShow1?'show1':'hide1'}>Demo222</div>
                <div><button onClick={this.toClick1}>Click1</button></div>
            </div> 
            </Fragment>
            
            
         );
    }

    toClick(){
        this.setState({
            isShow:this.state.isShow?false:true
        })
    }
    toClick1(){
        this.setState({
            isShow1:this.state.isShow1?false:true
        })
    }
    toClick2(){
        this.setState({
            isShow2:this.state.isShow2?false:true
        })
    }
}
 
export default Demo2;