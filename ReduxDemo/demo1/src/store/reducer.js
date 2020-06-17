
const defalutState ={
    inputValue:'DDDDDD',
    list:[]
}

//ONLY function is allowed in reducer, the return value depends on what kind of data your received 
export default (state=defalutState,action)=>{
    //reducer only accept state, can't change it
    if(action.type ==='changeInput'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue=action.value
        return newState
    }

    if(action.type === 'Add'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue=''
        return newState
    }

    if(action.type ==='Delete'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }

    if(action.type ==='data'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list=action.value
        return newState
    }
    return state
}