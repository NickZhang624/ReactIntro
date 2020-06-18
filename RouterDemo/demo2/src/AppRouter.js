import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Index from './Pages/Index'
import './index.css'
import Video from './Pages/Video'
import Workplace from './Pages/Workplace';

class AppRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //if the data from back end
            routeConfig:[
                {path:'/',title:'Home',exact:true,component:Index},
                {path:'/video',title:'Video',exact:false,component:Video},
                {path:'/workplace',title:'Workplace',exact:false,component:Workplace}
            ]
         }
    }
    render() { 
        return ( 
            <Router>
                <div className="mainDiv">
                    <div className="leftDiv">
                        <h3>First Nav</h3>
                        <ul>
                            {/* <li><Link to="/">Home</Link></li>
                            <li><Link to="/video/">Video</Link></li>
                            <li><Link to="/workplace/">Workplace</Link></li> */}
                            {
                                this.state.routeConfig.map((item,index)=>{
                                    return(
                                    <li key={index}><Link to={item.path}>{item.title}</Link></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="rightMain">
                        {/* <Route path="/" exact component={Index}/>
                        <Route path="/video/" component={Video}/>
                        <Route path="/workplace/" component={Workplace}/> */}

                        {
                                this.state.routeConfig.map((item,index)=>{
                                    return(
                                    <Route key={index} path={item.path} exact={item.exact} component={item.component}/>
                                    )
                                })
                        }
                    </div>

                </div>
            </Router>
         );
    }
}
 
export default AppRouter;