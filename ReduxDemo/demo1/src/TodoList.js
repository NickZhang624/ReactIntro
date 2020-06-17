import React, { Component } from 'react';
import store from './store/index'
import TodoListUl from './TodoListUl'
import axios from 'axios'

// const data=['sdgadgd','sadgdsg','asdgdsagdgdgr']

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.changeInputValue=this.changeInputValue.bind(this)
        this.storeChange=this.storeChange.bind(this)
        store.subscribe(this.storeChange)
        this.click=this.click.bind(this)
        this.itemClick=this.itemClick.bind(this)
    }

    componentDidMount(){
        axios.get('https://easy-mock.com/mock/5ee6f6635f62a4772f78005d/reactdemo/Demo1')
        .then((res)=>{
            const action ={
                type:'data',
                value:res.data.data
            }
            store.dispatch(action)
        })
    }

    render() { 
        return ( 
            <div>
                <TodoListUl 
                inputValue={this.state.inputValue}
                changeInputValue ={this.changeInputValue}
                click={this.click}
                list={this.state.list}
                itemClick={this.itemClick}
                />
            </div>
         );
    }

    changeInputValue(e){
        const action ={
            type:'changeInput',
            value:e.target.value
        }
        store.dispatch(action)
    }

    storeChange(){
        this.setState(store.getState())
    }

    click(){
        const action={
            type:'Add'
        }
        store.dispatch(action)
    }

    itemClick(index){
        const action={
            type:'Delete',
            index
        }
        store.dispatch(action)
    }
}
 
export default TodoList;