// how to use state in react functional component 16.8
import React, {useState} from 'react';

const FuncCounter = (props) => {
    console.log('FuncCounter called')
    
    // when setCounter is invoked, react shall call FuncCounter to update the value
    const [counter, setCounter] = useState(props.startValue)
    const [flag, setFlag] = useState(false)
    
    return (
        <div>
            <h2>Func Counter</h2>
            <p>Counter {counter}</p>

            <p>Flag {flag?'On':'off'} </p> 
            <button onClick={ () => setCounter( counter + 1)} >+1</button>
            <button onClick= { () => setCounter(0)} >Reset</button>
            <button onClick= { () => setFlag(!flag)} >Flag </button>
        </div>
    )
}

FuncCounter.defaultProps = {
    startValue: 0
}

export default FuncCounter;