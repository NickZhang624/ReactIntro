import React, { Component } from 'react';
import {Input,Button,List} from 'antd'
import 'antd/dist/antd.css'
import Item from 'antd/lib/list/Item';

class TodoListUl extends Component {

    render() { 
        return ( 
            <div>
                <div style={{margin:'10px'}}>
                <Input
                placeholder={this.props.inputValue}
                style={{width:'250px', marginRight:'5px'}}
                onChange={this.props.changeInputValue}
                value={this.props.inputValue}
                ></Input>
                <Button 
                type='primary'
                onClick={this.props.click}>Click</Button> 
                </div>
                <div style={{margin:'10px', width:'250px'}}>
                    <List
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item,index)=>(<List.Item onClick={()=>this.props.itemClick(index)}>{item}</List.Item>)}>
                    </List>

                </div>
            </div>
         );
    }
}
 
export default TodoListUl;