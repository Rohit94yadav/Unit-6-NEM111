import React from 'react'
import { useState } from 'react'
import axios from "axios"


export const SignUp = () => {
    const [data,setData]=useState({});
    const HandleOnchange=(e)=>{
const {name,value}=e.target;
setData({...data,[name]:value})
    }

    const HandelSubmit=(e)=>{
        e.preventDefault();
axios.post(`https://todo-4wr3.onrender.com/user/signup`,data).then((res)=>{
    alert(res.data.msg)
}).catch(e=>console.log(e))
    }
  return (
    <div>
        <form onSubmit={HandelSubmit}>
            <input onChange={HandleOnchange}  type="text" name="name" placeholder='name' /> 
            <input onChange={HandleOnchange} type="email" name="email" placeholder='email' /> 
            <input onChange={HandleOnchange} type="password" name="password" placeholder='password' /> 
            <input type="submit" value={"Signup"} /> 
        </form>
    </div>
  )
}
