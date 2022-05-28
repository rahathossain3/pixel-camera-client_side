import React from 'react';

const MyPortfolio = () => {
    return (
        <section>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <img alt='dsfg' className='w-2/4' src="https://scontent.fdac80-1.fna.fbcdn.net/v/t1.6435-9/62525834_995695537487993_6091191029426290688_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFfG8o6pXa722hhYMOUKvnzKXWTq4MDLwgpdZOrgwMvCCmpIMm2pMbIQk7Wc_0nlMZAY9mRxvmRRn1-09DJEjud&_nc_ohc=FEEfAH2MJHYAX8Fzfcg&_nc_ht=scontent.fdac80-1.fna&oh=00_AT94J6R6yqboUmhHlm3TP-q74MI8sQjCcERtTToWANDTIg&oe=62B6F0C8" />
                    <div>
                        <h1 className="text-5xl font-bold">Md Rahat Hossain Khan Imon</h1>
                        <p className="text-5xl font-bold py-6">Frontend Developer</p>
                        <button className="btn btn-primary">Hire me</button>
                    </div>
                </div>
            </div>

            <div>
                <h1 className='text-6xl text-center text-orange-500 font-bold my-10'>YOU CAN <span className='text-green-900'> HIRE </span> ME,..  FOR </h1>

                <img className='w-full' src="https://www.rlogical.com/wp-content/uploads/2020/12/MERN-Stack-considered-the-Best-for-Developing-Web-Apps.png" alt="Album" />

            </div>

        </section>

    );
};

export default MyPortfolio;