import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div>
            <div className='flex justify-center mt-4 items-center'>

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                    <div className="card-body">
                        <h2 className='text-center text-3xl font-bold'>Register to Account</h2>
                        <fieldset className="fieldset">
                            <label className="label">Your Name</label>
                            <input type="text" className="input" placeholder="Name" />

                            <label className="label">Photo URL</label>
                            <input type="text" className="input" placeholder="Photo URL" />

                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />

                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            
                            <button className="btn btn-neutral mt-4">Register</button>
                            <p className='text-center mt-4 text-base'>Do you have a account?
                                <Link
                                    className='text-green-600 font-semibold ml-2'
                                    to='/auth/login'>Login Here
                                </Link>
                            </p>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;