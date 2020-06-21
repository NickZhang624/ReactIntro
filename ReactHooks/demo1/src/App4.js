import React, { Component, useState, createContext,useContext} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

const CountContext = createContext()

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             count:0
//          }
//     }
//     render() { 
//         return ( 
//             <div>
//                 <p>Cliked times: {this.state.count}</p>
//                 <button onClick={this.btnClick.bind(this)}>Click</button>
//             </div>
//          );
//     }

//     btnClick(){
//         this.setState({
//             count:this.state.count+1
//         })
//     }
// }

//Hooks expression

function Counter(){
    let count = useContext(CountContext)
    return(
    <h2>{count}</h2>
    )
}

function App(){
    const [count, setCount]=useState(0)
    // let _useState=useState(0)
    // let count = _useState(0)
    // let setState = _useState(1)
    return(
        <div>
            <p>Cliked times: {count}</p>
            <button onClick={()=>{setCount(count+1)}}>Click</button>
            <CountContext.Provider value={count}>
                <Counter/>
            </CountContext.Provider>
        </div>
    )
}
 
export default App;