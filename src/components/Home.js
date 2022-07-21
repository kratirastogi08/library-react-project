import React, { Fragment, useEffect,useState } from 'react'
import axios from 'axios';
import BookCard from './BookCard';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box'
import './Home.css'

function Home() {
    const [books,setBooks]=useState({})
    const [loading,setLoading]=useState(true)
   const  getAllBooks=async()=>{
       const books=  await axios.get("http://localhost:3800/books/getAllBooks")
       setBooks(books.data.books)
       setLoading(false)
       console.log(books)
    }
    useEffect(()=>{
        getAllBooks()
    },[])
  return (
    <Fragment>
        {
        loading?(
            <Box sx={{ width: '100vw',height: '100vh', display:'flex', justifyContent:'center', alignItems:'center'
                 }}>
              <CircularProgress color="inherit" style={{width:'5vmax', height:'5vmax'}} />
            </Box>):(<Fragment >
                <div className='page-heading'>
            <h1 className="homeHeading">Featured Books</h1>
          <div className="container1" id="container">
            {books && books.map((book)=>{
                return(<BookCard key={book._id} book={book}></BookCard>)
            })}
          </div>
         </div>
            </Fragment>)
        }
        
    </Fragment>
  )
}

export default Home