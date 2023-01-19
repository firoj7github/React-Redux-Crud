import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { updateBooks } from '../redux/BookSlice';

const Editbook = () => {
    const location= useLocation();
    console.log(location);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [id, setId]= useState(location.state.id);
    const [title, setTitle]= useState(location.state.title);
    const [author, setAuthor]= useState(location.state.author);

    const handleSubmit=(e)=>{
        e.preventDefault();
       dispatch(updateBooks({id, title, author})); 
       navigate('/show-book');
    }
  return (
    <div>
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
        <button className='btn btn-primary ms-1' type="submit">Update Book</button>
      </form>
    </div>
  )
}

export default Editbook