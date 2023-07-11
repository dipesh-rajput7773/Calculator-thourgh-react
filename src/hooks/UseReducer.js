import React, { useReducer } from 'react'

function UseReducer() {


     const[state,dispatch] = useReducer(reducer,0)

   let handleClickInc =()=>{
    setCount(count+1)
   }
   let handleClickDec =()=>{
    setCount(count-1)
   }
  

  return (
    <>
  <div>
    <h1>{count}</h1>
    <button onClick={handleClickInc}>+</button>
    <button onClick={handleClickDec}>-</button>
  </div>
    </>
  )
}

export default UseReducer