import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './page/home/Home';
import Navbar from './page/shared/Navbar';
import Addbook from './page/Addbook';
import Showbooks from './page/shared/Showbooks';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/add-book' element={<Addbook></Addbook>}></Route>
        <Route path='/show-book' element={<Showbooks></Showbooks>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
