

import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addMusicRecord } from '../Redux/AppReducer/Action';

const AddMusic = () => {

  const[state, setState] = useState({
    name:"",
    genre:"",
    img:"",
  });

  const[error, setError] = useState("");
  let navigate = useNavigate()
  let dispatch = useDispatch()

  const {name, genre, img} = state;

  const handleinputChange = (e)=>{
      let {name, value} = e.target;
      setState({...state, [name]: value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!name || !genre || !img){
      setError("Please write in every input fiels");
    }else{
      dispatch(addMusicRecord(state));
        navigate("/")
        setError("");
    }
  }


  return (
    <div>
      <h1>Add Music Albums</h1>
      {error && <h3 style={{color:"red"}}>{error}</h3>}
      <form onSubmit={handleSubmit} >
        <label htmlFor="">ADD NAME</label>
        <br />
        <input type="text" placeholder='Name' value={name} name="name" onChange={handleinputChange} />
        <br />
        <label htmlFor="">ADD GENRE</label>
        <br />
        <input type="text" placeholder='genre' value={genre} name="genre" onChange={handleinputChange} />
        <br />
        <label htmlFor="">ADD IMAGE</label>
        <br />
        <input type="text" placeholder='image' value={img} name="img" onChange={handleinputChange} />
        <br />
        <button type='submit' >Add Music</button>
      </form>
    </div>
  )
}

export default AddMusic
