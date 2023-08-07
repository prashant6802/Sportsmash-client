import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios"

const Add = () => {

    const [book,setBook] = useState({
        name: "",
        rating: null,
        image1: "",
        image2: "",
        wins: 0,
        Totalmatches: 0,
    });

    const navigate = useNavigate()

    const handleChange = (e) =>{
        setBook(prev=>({ ...prev, [e.target.name]: e.target.value}))
    }

    const handleCLick = async e =>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:8800/cards",book)
            navigate("/")
        }catch(err){

        }
    }

  return (
    <div className='form'>
      <h1>Add new star</h1>
      <input type="text" placeholder='name' onChange={handleChange} name='name'/>
      <input type="number" placeholder='rating' onChange={handleChange} name='rating'/>
      <input type="text" placeholder='image1' onChange={handleChange} name='image1'/>
      <input type="text" placeholder='image2' onChange={handleChange} name='image2'/>
      <input type="number" placeholder='wins' onChange={handleChange} name='wins'/>
      <input type="number" placeholder='Totalmatches' onChange={handleChange} name='Totalmatches'/>
        <button onClick={handleCLick}> Add Personality </button>
    </div>
  )
}

export default Add
