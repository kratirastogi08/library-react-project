import React from 'react'
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Navbar  from './components/Navbar';
import Home from './components/Home'
import BookDetails from './components/BookDetails'
import AddBook from './components/AddBook'
import UpdateBook from './components/updateBook'
import DeleteBook from './components/DeleteBook'
import './app.css'

function App() {
  return (
    <div className="container">
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}>
        </Route>
        <Route path="/book/:id" element={<BookDetails></BookDetails>}></Route>
        <Route path="/addBook" element={<AddBook></AddBook>}></Route>
        <Route path="/updateBook" element={<UpdateBook></UpdateBook>}></Route>
        <Route path="/deleteBook" element={<DeleteBook></DeleteBook>}></Route>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
