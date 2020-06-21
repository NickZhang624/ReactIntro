import React, { Component, useState} from 'react';

//Hooks expression
//CAN NOT USE if satement in this function
function App2(){
    const [age,setAge] = useState(24)
    const [sex,setSex] = useState('male')
    const [job,setJob] = useState('Front-end')

    return(
        <div>
            <p>Nick's age is {age}, {sex}, {job}</p>
        </div>
    )
}
 
export default App2;