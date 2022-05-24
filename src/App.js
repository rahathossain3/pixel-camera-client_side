import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home';
import Navbar from './Page/Shared/Navbar/Navbar';
import MyPortfolio from './Page/MyPortfolio/MyPortfolio';
import NotFound from './Page/Shared/NotFound/NotFound';

function App() {
  return (
    <div className=' lg:px-10 sm:p-5'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>

        <Route path='/blog' element={<MyPortfolio />}></Route>
        <Route path='/portfolio' element={<MyPortfolio />}></Route>


        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
