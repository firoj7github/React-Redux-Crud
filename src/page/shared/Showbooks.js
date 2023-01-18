import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Showbooks = () => {
    const books = useSelector((state)=>state.booksReducer.books);
    console.log(books);
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
                    <button className='btn btn-danger ms-2'>
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