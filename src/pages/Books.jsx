import React, { useEffect, useState } from 'react'
import axios from "axios";
// import Navbar from './Navbar.jsx';

const Books = () => {

    const [books,setBooks] = useState([]);

    const fetchAllBooks = async () => {
        try{
            const res = await axios.get("http://localhost:8800/cards")
            setBooks(res.data);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        fetchAllBooks()
    },[])


    const handleUpdate2 = ()=>{

        let ea = (1.0 / (1.0 + Math.pow(10, ((books[1].rating-books[0].rating) / 400))));
        let sa = 0;
        let ka = 30;
        let Ra = books[0].rating + ka*(sa-ea);



        let eb = (1.0 / (1.0 + Math.pow(10, ((books[0].rating-books[1].rating) / 400))));
        let sb = 1;
        let kb = 30;
        let Rb = books[1].rating + kb*(sb-eb);

        try{
            axios.put("http://localhost:8800/cards", {
                rating1: Ra,
                id1: books[0].id,
                id2: books[1].id,
                rating2: Rb,
                incid: books[1].id,
            });
            window.location.reload();
        }catch(err){
            console.log(err);
        }
    }

    const handleUpdate = ()=>{

        let ea = (1.0 / (1.0 + Math.pow(10, ((books[1].rating-books[0].rating) / 400))));
        let sa = 1;
        let ka = 30;
        let Ra = books[0].rating + ka*(sa-ea);



        let eb = (1.0 / (1.0 + Math.pow(10, ((books[0].rating-books[1].rating) / 400))));
        let sb = 0;
        let kb = 30;
        let Rb = books[1].rating + kb*(sb-eb);

        try{
            axios.put("http://localhost:8800/cards", {
                rating1: Ra,
                id1: books[0].id,
                id2: books[1].id,
                rating2: Rb,
                incid: books[0].id,
            });
            window.location.reload();
        }catch(err){
            console.log(err)
        }
    }


    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);

  const handleHover1 = () => {
    setIsHovered1(true);
  };

  const handleLeave1 = () => {
    setIsHovered1(false);
  };

  const handleHover2 = () => {
    setIsHovered2(true);
  };

  const handleLeave2 = () => {
    setIsHovered2(false);
  };

  return (
    <div className='all'>
      {books.length >= 2 && (
        <>
        <h2 style={{color: "white"}}>Choose the Better Footballer </h2>
      <div className="books">

            <div className="book">
                <img className='bookimg' src={books[0].image1} alt="not fetched"onClick={handleUpdate}/>
                <button className='but1' onClick={handleUpdate}>{books[0].name}</button>
            </div>

            <img src={"https://i.imgur.com/nS0uJ7B.png"} alt="not fetched" className='versus'/>

            <div className="book">
                <img className='bookimg1' src={books[1].image1} alt="not fetched"onClick={handleUpdate2}/>
                <button className='but2' onClick={handleUpdate2}>{books[1].name}</button>
            </div>
        
      </div>
      </>
      )}
        {books.length < 2 && (
            <div>{books.length}</div>
        )}

    </div>
  )
}

export default Books
