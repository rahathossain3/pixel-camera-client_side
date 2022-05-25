import React from 'react';
import linkedin from '../../../Image/footer img/linkdin.png';
import github from '../../../Image/footer img/github.png';
import { Link } from 'react-router-dom';

// import footer from '../../assets/images/footer.png';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-slate-100 text-base-content rounded">
            <div className="grid grid-flow-col text-xl gap-4">
                <Link to='/products' className="link link-hover">Products</Link>
                <Link to='/review' className="link link-hover">Review</Link>
                <Link to='/blog' className="link link-hover">Blog</Link>
                <Link to='/portfolio' className="link link-hover">Portfolio</Link>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a href='https://github.com/rahathossain3' target='blank' ><img width="30" height="30" src={github} alt="" /></a>

                    <a href='https://www.linkedin.com/in/rahathossain3/' target='blank' ><img width="30" height="30" src={linkedin} alt="" /></a>

                    <a href='https://www.facebook.com/Rahat.Imon.01/' target='blank' ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>

                </div>
            </div>
            <div>
                <p>Copyright © 2022 - All right reserved by <span className='font-bold'>Pixel Camera</span></p>
            </div>
        </footer >
    );
};

export default Footer;