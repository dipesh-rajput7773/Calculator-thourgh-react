import React, { useState } from 'react'
import ChlidMemo from './ChlidMemo';

function Memo() {

    const [count, setCount] = useState(0);
    const [input, setInput] = useState('');

    const handleInput = (e) => {
        setInput(e.target.value)
    }
    return (

        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>click me</button>


            <br /><br />
            <input type='text' value={input} onChange={handleInput}></input>
            <hr></hr>

            <ChlidMemo newCount={count} />
        </div>
    )
}




// Memo is higher order component use for optimise prfomence
// memorise is optimisation technicque
// main use speed up your program
export default Memo