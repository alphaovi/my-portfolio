import React from 'react';
import { Link } from 'react-router-dom';
import PageDevider from '../PageDevider/PageDevider';
import loginImage from "../../assets/Login/login.svg";

const SignUp = () => {
    return (
        <div>
            <div className="hero w-full bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="lg:text-left">
                        <img src={loginImage} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" />
                            </div>
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
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                            <div>
                                <Link to="/login">Already Have An Account? <span className="text-[#7B68EE]">Login</span></Link>
                            </div>
                            <PageDevider></PageDevider>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignUp;