import axios from 'axios';
import React, { useState } from 'react'

export const AddTodos = () => {
    const token=localStorage.getItem("token")
    const [data,setData]=useState({});
    const HandleOnchange=(e)=>{
const {name,value}=e.target;
setData({...data,[name]:value})
    }
console.log(token)
    const HandelSubmit=(e)=>{
        e.preventDefault();
axios.post(`https://todo-4wr3.onrender.com/todos/addtodos`,data,{
    headers:{
        'Authorization':`Bearer ${token}`
    }}).then((res)=>{
    alert(res.data.mag)
}).catch(e=>console.log(e))
    }
  return (
    <div>
        <form onSubmit={HandelSubmit}>
            <input onChange={HandleOnchange} type="text" name="taskname" placeholder='taskname' />
            <input onChange={HandleOnchange} type="text" name="status" placeholder='status' /> 
            <input onChange={HandleOnchange} type="text" name="tag" placeholder='tag' /> 
            <input type="submit" value={"add todo"} /> 
        </form>
    </div>
  )
}
