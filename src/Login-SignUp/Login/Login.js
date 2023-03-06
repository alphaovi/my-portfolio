import React from 'react';
import { Link } from 'react-router-dom';
import loginImage from "../../assets/Login/login.svg"
import PageDevider from '../PageDevider/PageDevider';

const Login = () => {
    return (
        <div>
            <div className="hero w-full bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="lg:text-left">
                        <img src={loginImage} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-5xl text-center font-bold">Login</h1>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to="/" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            <div>
                                <Link to="/signup">New User? <span className="text-[#7B68EE]">Create A New Account</span></Link>
                            </div>
                            <PageDevider></PageDevider>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;