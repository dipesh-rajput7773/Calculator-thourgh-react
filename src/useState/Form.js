import React, { useState } from 'react'

function Form() {

// const [name,setName] = useState("");
// const [email,setEmail] = useState("");
// const [password,setPassword] = useState("");

const [formData,setFormData]  = useState({
    name:'',
    email:'',
    password:''
})

//     const handleName = (e)=>{
// setName(e.target.value);
//     }
//     const handleEmail = (e)=>{
//         setEmail(e.target.value);
//     }
//     const handlePassword = (e)=>{
//         setPassword(e.target.value);
//     }


const handleInput = (e)=>{
    console.log(e.target.name)
    console.log(e.target.value)
    const {name,value} = e.target;
    setFormData({...formData,[name]:value})
}
    const handleSubmit = (e)=>{
        e.preventDefault();
    }


    
  return (
    <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input type='text' name='name' value={formData.name} onChange={handleInput}></input>
        </label>
        <label>
            Email:
            <input type='email' name='email' value={formData.email} onChange={handleInput}></input>
        </label>
        <label>
            Password:
            <input type='password' name='password' value={formData.password} onChange={handleInput}></input>
        </label>
        <button type='submit'>submit</button>
    </form>
  )
}

export default Form