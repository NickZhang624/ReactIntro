import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Index from './Pages/Index'
import List from './Pages/List'
import Home from './Pages/Home';

class AppRouter extends Component {
    render() { 
        return ( 
            <Router>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/list/123'>List</Link></li>
                </ul>
                <Route path="/" exact component={Index}/>
                <Route path="/list/:id" component={List}/>
                <Route path="/home/" component={Home}/>
                
            </Router>
         );
    }
}
 
export default AppRouter;