import { Link } from "react-router-dom";
import React from 'react'

function BookCard({book}) {

  return (
    <Link className="bookCard" to={`/book/${book._id}`}>
        <h3>{book.bookTitle}</h3>
        <h3>{book.author}</h3>
        <h3>{book.price}</h3>
    </Link>
  )
}

export default BookCard