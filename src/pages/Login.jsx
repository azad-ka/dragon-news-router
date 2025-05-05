import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='flex justify-center mt-10 items-center'>

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                <div className="card-body">
                    <h2 className='text-center text-3xl font-bold'>Login to Account</h2>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                        <p className='text-center mt-4 text-base'>Don't have a account?
                            <Link
                                className='text-blue-700 font-semibold ml-2'
                                to='/auth/register'>Register
                            </Link>
                        </p>
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default Login;