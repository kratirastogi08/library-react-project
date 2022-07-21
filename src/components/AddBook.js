import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './addBook.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddBook() {
    const navigate = useNavigate();
    const [message,setMessage]=useState("")
    const initialValues = {
        title: "",
        author: "",
        price:""
      };
    const addBookSchema = Yup.object().shape({
        title: Yup.string().required("title is required"),
      
        author: Yup.string()
          .required("author is required"),

        price: Yup.number()
          .required("price is required")
          
      });
     const addBook=async (values)=>{
         const body={...values,bookTitle:values.title}
        const {data}= await axios.post('http://localhost:3800/books/addBook',body)
       console.log(data);
       if(data.success){
         setMessage("Book added sucessfully")
       }
      }
  return (
    <Formik
    initialValues={initialValues}
      validationSchema={addBookSchema}
      onSubmit={(values,{ resetForm , setSubmitting}) => {
        
            addBook(values)
       
        
         setTimeout(()=>{
           setSubmitting(false)
            resetForm()
            setMessage("")
        },3000)
        
       
      }}
    >
        {
            (formik)=>{
                const { errors, touched, isValid, dirty,isSubmitting } = formik;
                return(
                    <div className="page-heading">
                  <h1>Add Book</h1>
                  <Form className="addBookForm">
                  <div className="form-row">
                <label htmlFor="email">Title</label>
                <Field
                  type="text"
                  name="title"
                  id="title"
                  className={`form-control ${errors.title && touched.title ? 
                  "input-error" : null}`}
                />
                <ErrorMessage name="title" component="span" className="error" />
                </div>

                <div className="form-row">
                <label htmlFor="author">Author</label>
                <Field
                  type="text"
                  name="author"
                  id="author"
                  className={`form-control ${errors.author && touched.author ? 
                  "input-error" : null}`}
                />
                <ErrorMessage
                  name="author"
                  component="span"
                  className="error"
                />
              </div>
              <div className="form-row">
                <label htmlFor="price">Price</label>
                <Field
                  type="number"
                  name="price"
                  id="price"
                  className={`form-control ${errors.price && touched.price ? 
                  "input-error" : null}`}
                />
                <ErrorMessage
                  name="price"
                  component="span"
                  className="error"
                />
              </div>
              <button
                type="submit"
                className={`add-btn ${(!(dirty && isValid)|| isSubmitting)? "disabled-btn" : ""}`}
                disabled={(!(dirty && isValid))|| isSubmitting}
              >
                Add Book
              </button>
              <button className='add-btn' onClick={()=>navigate('/')}>Go Back</button>
              {message && message.length>0?(<p className="success-msg">{message}</p>):""}
                  </Form>
              </div>
                )
            }
            
        }
    </Formik>
    
  )
}

export default AddBook