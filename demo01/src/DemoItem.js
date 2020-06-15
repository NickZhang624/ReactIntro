import React, { Component } from 'react';
import PropTypes from 'prop-types'//checking data where from father component

class DemoItem extends Component {

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    // UNSAFE_componentWillReceiveProps(){
    //     console.log("Child ONLY---UNSAFE_componentWillReceiveProps")
    // }

    // componentWillUnmount(){
    //     console.log("Child ONLY---componentWillUnmount")
    // }

    render() { 
        return (
        <li onClick={this.handleClick.bind(this)}>
        {this.props.name} - {this.props.content}
        </li>
        );
    }

    handleClick(){
        this.props.deleteItem(this.props.index)
    }
   
}

DemoItem.propTypes={
    name:PropTypes.string.isRequired,
    content:PropTypes.string,
    index:PropTypes.number,
    deleteItem:PropTypes.func
}

DemoItem.defaultProps={
    name:'nick'
}
 
export default DemoItem;