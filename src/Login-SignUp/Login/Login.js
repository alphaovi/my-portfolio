import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginImage from "../../assets/Login/login.svg"
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import PageDevider from '../PageDevider/PageDevider';

const Login = () => {

    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(result => {
                const user = result.user;
                if (user) {
                    navigate("/")
                }

            })
            .then(error => {
                console.log(error);
            })
    }


    return (
        <div>
            <div className="hero w-full bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="lg:text-left">
                        <img src={loginImage} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-5xl text-center font-bold">Login</h1>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name="password" placeholder="password" className="input input-bordered" />
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
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;