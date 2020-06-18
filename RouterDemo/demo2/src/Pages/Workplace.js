import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'
import Payment from './workplace/Payment'
import Wake from './workplace/Wake'



class Workplace extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <div className="topNav">
                    <ul>
                        <li><Link to="/workplace/payment">Payment</Link></li>
                        <li><Link to="/workplace/wake">Wake</Link></li>
                    </ul>
                </div>
                <div>
                    <div className="videoContent">
                        <h2>Workplace</h2>
                        <Route path="/workplace/payment" component={Payment}/>
                        <Route path="/workplace/wake" component={Wake}/>
                    </div>
                
                    
                </div>
                
            </div>
         );
    }
}
 
export default Workplace;