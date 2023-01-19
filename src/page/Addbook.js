import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBooks } from '../redux/BookSlice';

const Addbook = () => {
  const [title, setTitle]= useState('');
  const [author, setAuthor]= useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const numberofBooks= useSelector((state)=> state.booksReducer.books.length);

  const handleSubmit = (e) => {
    e.preventDefault();
    const book= {id: numberofBooks+1, title, author};
    dispatch(addBooks(book));
    navigate('/show-book');

    
  };
  return (
    <div>
      <h4 className='text-center'>Add Book</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input class="form-control"
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="author">Author: </label>
          <input className="form-control mb-3"
            type="text"
            id="author"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button className='btn btn-primary ms-1' type="submit">Add Book</button>
      </form>
    </div>
  )
}

export default Addbook;