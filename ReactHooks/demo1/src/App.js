import React, { Component, useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

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


function Index(){
    useEffect(()=>{
        console.log('I am coming')
        // if add return function means use componentWillUnmount
        return()=>{
            console.log('I am leaving')
        }
    },[])
    return(
        <h2>This is Home</h2>
    )
}

function List(){
    useEffect(()=>{
        console.log('I am coming')
    })
    return(
        <h2>This is List</h2>
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

            <Router>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/list/'>List</Link></li>
                </ul>
                <Route path='/' exact component={Index}/>
                <Route path='/list/' component={List}/>
            </Router>

        </div>
    )
}
 
export default App;