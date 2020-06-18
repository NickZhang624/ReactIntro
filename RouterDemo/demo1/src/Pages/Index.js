import React, { Component, Fragment } from 'react';
import {Link,Redirect} from 'react-router-dom'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
                {cid:123,title:"index1"},
                {cid:124,title:"index2"},
                {cid:125,title:"index3"}
            ]
         }
         this.props.history.push("/home/")
    }
    render() { 
        return (
            <Fragment>
                {/* <Redirect to='/home'/> */}
                <h2>First page</h2>
                <div>
                    <ul>
                        {
                            this.state.list.map((item,index)=>{
                                return(
                                <li key={index}><Link to={'/list/'+item.cid}>{item.title}</Link></li>
                                )
                            })
                        }
                    </ul>
                </div>
            </Fragment>
            

         );
    }
}
 
export default Index;