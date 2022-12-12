import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export const UpdateTodo = () => {
    const {id}=useParams();

       const token=localStorage.getItem("token")
    const [data,setData]=useState({});
    const HandleOnchange=(e)=>{
const {name,value}=e.target;
setData({...data,[name]:value})
    }
console.log(token,data)
    const HandelSubmit=(e)=>{
        e.preventDefault();
axios.post(`https://todo-4wr3.onrender.com/todos/updatetodos/${id}`,data,{
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
            <input type="submit" value={"update todo"} /> 
        </form>
    </div>
  )
}
