import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddMusic from '../Components/AddMusic'
import EditMusicRecord from './EditMusicRecord'
import Login from './Login'
import MusicRecords from './MusicRecords'
import ReqAuth from './ReqAuth'
import SingleMusicRecord from './SingleMusicRecord'

const MainRoutes = () => {
  return (
   <Routes>
            <Route path="/" element={<MusicRecords />} />
            <Route path="/music/:id" element={<SingleMusicRecord />} />
            {/* <Route path="/music/:id/edit" element={<ReqAuth><EditMusicRecord /></ReqAuth>} /> */}
            <Route path="/music/:id/edit" element={<EditMusicRecord />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<h3>Page Not Found</h3>} />
            <Route path="/addmusic" element={<AddMusic/>} />
   </Routes>
  )
}

export default MainRoutes
