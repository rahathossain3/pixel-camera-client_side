import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);

    //  console.log(user);
    return (
        <div className='lg:px-18'>
            <hr />
            <h2 className='text-3xl mt-5 mb-4 text-center '>User Profile</h2>
            <hr />
            <div className="card card-side bg-base-100 p-5 shadow-xl">
                <figure>
                    <div className=" avatar online w-28 placeholder">
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
                            <img src={user?.photoURL} alt="" />
                        </div>
                    </div> </figure>
                <div className="card-body font-semibold">
                    <h2 className="card-title">{user?.displayName}</h2>
                    <p>Email: {user?.email}.</p>
                    <p>Phone Number: {user?.phoneNumber}.</p>

                </div>
            </div>

        </div>
    );
};

export default MyProfile;