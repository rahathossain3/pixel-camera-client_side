import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home';
import Navbar from './Page/Shared/Navbar/Navbar';
import MyPortfolio from './Page/MyPortfolio/MyPortfolio';

function App() {
  return (
    <div className=' lg:px-10 sm:p-5'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>

        <Route path='/portfolio' element={<MyPortfolio />}></Route>

      </Routes>
    </div>
  );
}

export default App;
