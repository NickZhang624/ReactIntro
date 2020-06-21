import React, { Component, useEffect, useState} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count:0
         }
    }

    componentDidMount(){
        console.log(`${this.state.count}`)
    }

    componentDidUpdate(){
        console.log(`${this.state.count}`)
    }

    //use Effect means both componentdidmount and componentdidupdate
    
    
    render() { 
        return ( 
            <div>
                <p>Cliked times: {this.state.count}</p>
                <button onClick={this.btnClick.bind(this)}>Click</button>
            </div>
         );
    }

    btnClick(){
        this.setState({
            count:this.state.count+1
        })
    }
}


 
export default App;