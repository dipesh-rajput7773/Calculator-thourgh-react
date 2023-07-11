import React, { createContext } from 'react'
import A from './A'
import D from './D';

const GreetContext = createContext();

function Main() {



    let firstName = "Dipesh";
    let lastName="singh";
  return (

    <div>Main

<GreetContext.Provider value={[firstName,lastName]}>
<A />
<D />
</GreetContext.Provider>
    </div>
  )
}

export default Main
export {GreetContext};