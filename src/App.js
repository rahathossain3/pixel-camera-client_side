import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home';
import Navbar from './Page/Shared/Navbar/Navbar';

function App() {
  return (
    <div className=' lg:px-10 sm:p-5'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
