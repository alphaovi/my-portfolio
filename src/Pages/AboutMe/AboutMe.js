import React from 'react';
import "./AboutMe.css";

const AboutMe = () => {
    return (
        <>
            <div className="hero min-h-screen bg-white">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/D7Nf8Wj/img-profil.jpg" className="max-w-sm rounded-lg shadow-2xl" alt="" />
                    <div>
                        <h1 className="text-5xl font-bold">Foysal Ahamed Ovi</h1>
                        <p className="mt-5 text-left ">Hello, I am a <span className="font-bold">MERN</span> stack developer with a strong foundation in JavaScript and web development. I have experience building full-stack web applications using MongoDB, Express.js, React, and Node.js.
                            <p>As an entry-level developer, I am eager to learn and grow in a collaborative team environment. I have a strong work ethic and I am committed to producing high-quality code that is maintainable and scalable.</p>
                            <br />
                            <p>Here are some of my key skills and attributes:</p>
                            <ul className="skill-list text-left">
                                <li>Proficient in HTML, CSS, and JavaScript</li>
                                <li>Experience with front-end frameworks like React and Redux</li>
                                <li>Familiarity with server-side development using Node.js and Express.js</li>
                                <li>Knowledge of database management using MongoDB</li>
                                <li>Comfortable working with APIs and integrating third-party libraries</li>
                                <li>Excellent communication and teamwork abilities</li>
                                <li>Passionate about staying up-to-date with emerging technologies and industry trends</li>
                            </ul>
                        </p>
                        <div className="mt-10 text-left font-bold">
                            <p>Social Media Links</p>
                            <ul className="skill-list text-left">
                                <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/foysalahamedovi/">Instagram</a></li>
                                <li><a target="_blank" rel="noopener noreferrer" href="www.linkedin.com/in/webboss-foysal-ahamed-ovi">Linkedin</a></li>
                                <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ovi778811">Twitter</a></li>
                                <li><a target="_blank" rel="noopener noreferrer" href="/">Discord</a></li>
                                <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/FoysalAhamedOvi/">Facebook</a></li>
                                <li><a target="_blank" rel="noopener noreferrer" href="https://t.me/FoysalAhamedOvi">Telegram</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>


    );
};

export default AboutMe;