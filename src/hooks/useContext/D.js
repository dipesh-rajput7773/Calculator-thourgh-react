import React, { useContext } from 'react'
import { GreetContext } from './Main'


function D(){
  const useCon = useContext(GreetContext);

  return (
    <div><h1>Greet:{useCon} D</h1></div>
  )
  
}

export default D