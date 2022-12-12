import axios from 'axios';
import React, { useState } from 'react'

export const Login = () => {
    const [data,setData]=useState({});
    const HandleOnchange=(e)=>{
const {name,value}=e.target;
setData({...data,[name]:value})
    }

    const HandelSubmit=(e)=>{
        e.preventDefault();
axios.post(`https://todo-4wr3.onrender.com/user/login`,data).then((res)=>{
    alert(res.data.msg)
    localStorage.setItem("token",res.data.token)
}).catch(e=>console.log(e))
    }
  return (
    <div>
        <form onSubmit={HandelSubmit}>
            <input onChange={HandleOnchange} type="email" name="email" placeholder='email' /> 
            <input onChange={HandleOnchange} type="password" name="password" placeholder='password' /> 
            <input type="submit" value={"login"} /> 
        </form>
    </div>
  )

}
