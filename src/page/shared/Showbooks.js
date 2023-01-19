import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteBooks } from '../../redux/BookSlice';

const Showbooks = () => {
    const books = useSelector((state)=>state.booksReducer.books);
    const dispatch= useDispatch();
    console.log(books);
    const handelDelete=(id)=>{
       dispatch(deleteBooks(id));
    }
  return (
    <div>
        <h2 className='text-center'>List of Books</h2>
      <table className="table">
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className='table-success'>
          {books &&
            books.map((book) => {
              const { id, title, author } = book;
              return (
                <tr key={id}>
                  {/* <td>{id}</td> */}
                  <td>{title}</td>
                  <td>{author}</td>
                  <td>
                    <Link to="/edit-book" state={{ id, title, author }}>
                      <button className='btn btn-success '>Edit</button>
                    </Link>
                    <button onClick={()=>{handelDelete(id)}} className='btn btn-danger ms-2'>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  )
}

export default Showbooks