import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Image/New Project.png'

const Navbar = () => {


    // const logout = () => {
    //     signOut(auth);
    //     // for remove jwt
    //     localStorage.removeItem('accessToken');
    // };

    //menu items
    const menuItems = <>
        <li className='hover:text-orange-600'><Link to="/">Home</Link></li>
        <li className='hover:text-orange-600'><Link to="/products">Products</Link></li>
        <li className='hover:text-orange-600'><Link to="/review">Reviews</Link></li>
        <li className='hover:text-orange-600'><Link to="/blog">Blogs</Link></li>
        <li className='hover:text-orange-600'><Link to="/portfolio">Portfolio</Link></li>
        <li className='hover:text-orange-600'><Link to="/dashboard">Dashboard</Link></li>
        <li className='hover:text-orange-600'><Link to="/login">Login</Link></li>

        {/* {
            user && <li><Link to="/dashboard">Dashboard</Link></li>
        } */}

        {/* <li> {user ? <button onClick={logout} className="btn btn-ghost">Sign out</button> : <Link to="/login">Login</Link>}</li> */}
    </>



    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-2xl font-bold text-secondary hover:bg-sky-200 hover:text-orange-600">
                    <img className='w-7 pr-2' src={logo} alt="" /> Pixel Camera</a>
            </div>


            {/* for dashboard  */}
            <div className="navbar-end">
                <div className=" hidden lg:flex ">
                    <ul className="menu menu-horizontal p-0 font-bold ">
                        {menuItems}
                    </ul>
                </div>
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

            </div>

        </div>

    );
};
export default Navbar;