import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn m-1"><svg xmlns="https://i.ibb.co/D7Nf8Wj/img-profil.jpg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label>
                    <ul tabIndex={0} className="dropdown-content text-neutral-700 text-2xl font-thin menu p-2 shadow bg-black rounded-box w-52">
                        <li className="hover:text-white "><Link to="/">Home</Link></li>
                        <li className="hover:text-white "><Link to="/project">Project</Link></li>
                        <li className="hover:text-white "><Link to="/aboutme">About Me</Link></li>
                        <li className="hover:text-white "><Link to="/contact">Contact</Link></li>
                        <li className="hover:text-white "><Link to="/login">Login / Sign Up</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;