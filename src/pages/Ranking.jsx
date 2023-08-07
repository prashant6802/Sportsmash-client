import React, { useEffect, useState } from 'react'
import axios from "axios"

const Ranking = () => {

    const [books,setBooks] = useState([]);

    const fetchAllBooks = async () => {
        try{
            const res = await axios.get("http://localhost:8800/ranks")
            setBooks(res.data);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        fetchAllBooks()
    },[])
    books.sort((a, b) => b.rating - a.rating);

  return (

    <div className='totalrank'>

        <div className='allrank' style={{ height:"85vh", marginTop:"10vh" , display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"center"}}>

        <div className='rankrow'>

            Rankings

        </div>

        <div className="list">

            {books.map((book,index) =>(

                <div className='rankrowhead' key={index}>

                    <div className='rankind'>{index+1}</div>
                    <div className='rankval1'>{book.name}</div>
                    <div className='rankval'>{book.rating}</div>

                </div>

            ))}

        </div>

        </div>

    </div>

  )
}

export default Ranking
