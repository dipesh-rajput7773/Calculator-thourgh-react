import React, { useMemo, useState } from 'react'


function Usememo() {

    const [count, setCount] = useState(0);
    const [input, setInput] = useState('');

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    let result = useMemo(function slowFunction() {
    let sum = 0;
    for (let i = 0; i <= 100000000; i++) {
        sum += i;
    }
    console.log("hello i am slow ")
    return sum
},[count])
    

    

    return (

        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>click me</button>


            <br /><br />
            <input type='text' value={input} onChange={handleInput}></input>
            <h1>Input: {input}</h1>
            <hr></hr>
           <p>{result}</p>

        </div>
    )
}




export default Usememo