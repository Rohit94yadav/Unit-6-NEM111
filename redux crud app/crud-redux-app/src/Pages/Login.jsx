import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { login } from '../Redux/AuthReducer/Action';
import { USER_LOGIN_SUCCESS } from '../Redux/AuthReducer/ActionType';

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const[email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit= (e)=>{

        e.preventDefault();
        if(email && password){
            dispatch(login({email, password})).then((res)=>{
                if(res.type === USER_LOGIN_SUCCESS){
                        navigate(location.state.from, {replace: true})
                }
            })
            setEmail("");
            setPassword("");
        }

    }

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>

     
      <div>
        <label htmlFor="">Email</label>
        <input type={"email"} value ={email} onChange={e=> setEmail(e.target.value)} />
      </div>

      <div>
        <label htmlFor="">Password</label>
        <input type={"password"} value ={password} onChange={e=> setPassword(e.target.value)}/>
      </div>

      <div>
        <button type='submit'>Sign in</button>
      </div>
      </form>
    </div>
  )
}

export default Login
