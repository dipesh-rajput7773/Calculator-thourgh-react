import React, { useContext } from 'react'
import { GreetContext } from './Main'

function B() {

  let data= useContext(GreetContext)
  return (
  <>
<h2> FirstName:{data[0]}</h2>
<br></br>
<h2>LastName:{data[1]}</h2>
  </>
  )
}

export default B