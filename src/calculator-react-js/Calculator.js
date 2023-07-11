    import React, { useState } from 'react'
import './style.css'

function Calculator() {
    const [output, setOutput] = useState('')

    const handleButtonClick = (value)=>{
        if(value === 'c'){
            setOutput('')
        }else if(value === 'x'){
            setOutput(output.slice(0,-1));
        }else if(value === '='){
          
        }else{
            setOutput((preValue)=> preValue + value)
        }

    }
  return (
    <div className='container'>
        <div className='wrapper'>
            <h1 id='Output'>{output}</h1>
            <div>
                <button onClick={()=>handleButtonClick('c')} >C</button>
                <button onClick={()=>handleButtonClick('x')} >X</button>
                <button onClick={()=>handleButtonClick('%')}>%</button>
                <button onClick={()=>handleButtonClick('/')}>/</button>
            </div>
            <div>
                <button  onClick={()=>handleButtonClick('7')}>7</button>
                <button  onClick={()=>handleButtonClick('8')}>8</button>
                <button  onClick={()=>handleButtonClick('9')}>9</button>
                <button  onClick={()=>handleButtonClick('*')}>*</button>
            </div>
            <div>
                <button  onClick={()=>handleButtonClick('4')}>4</button>
                <button  onClick={()=>handleButtonClick('5')}>5</button>
                <button  onClick={()=>handleButtonClick('6')}>6</button>
                <button  onClick={()=>handleButtonClick('-')}>-</button>
            </div>
            <div>
                <button  onClick={()=>handleButtonClick('1')}>1</button>
                <button  onClick={()=>handleButtonClick('2')}>2</button>
                <button  onClick={()=>handleButtonClick('3')}>3</button>
                <button  onClick={()=>handleButtonClick('+')}>+</button>
            </div>
            <div>
                <button  onClick={()=>handleButtonClick('0')}>0</button>
                <button  onClick={()=>handleButtonClick('00')}>00</button>
                <button  onClick={()=>handleButtonClick('.')}>.</button>
                <button  onClick={()=>handleButtonClick('=')}>=</button>
            </div>
        </div>
    </div>
  )
}

export default Calculator