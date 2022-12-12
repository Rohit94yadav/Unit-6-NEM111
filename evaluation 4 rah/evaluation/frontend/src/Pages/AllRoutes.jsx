import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AddTodos } from './AddTodos'
import { Home } from './Home'
import { Login } from './Login'
import { SignUp } from './Signup'
import { UpdateTodo } from './UpdateTodo'

export const AllRoutes = () => {
  return (
    <div>

        <Routes >
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/addtodos' element={<AddTodos />} />
            <Route path='/updatetodo/:id' element={<UpdateTodo />} />
        </Routes>
    </div>
  )
}
