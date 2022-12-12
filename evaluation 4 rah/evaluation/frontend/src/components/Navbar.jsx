import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div style={{display:'flex',justifyContent:"space-around",backgroundColor:"blue",height:"50px",color:"white",alignItems:"center"}}>
        <div><h1>Todos</h1></div>
        <div style={{display:'flex',justifyContent:"space-around",gap:"50px",color:"white"}}>
            <Link to={"/"}><div style={{display:'flex',justifyContent:"space-around",gap:"50px",color:"white"}}>Home</div></Link>
            <Link to={"/signup"}><div style={{display:'flex',justifyContent:"space-around",gap:"50px",color:"white"}}>Signup</div></Link>
            <Link to={"/login"}><div style={{display:'flex',justifyContent:"space-around",gap:"50px",color:"white"}}>Login</div></Link>
        </div>
    </div>
  )
}
