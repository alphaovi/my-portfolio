import React from 'react';

const MyIntroduction = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/dkFMrDD/img-home.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mt-20 text-5xl font-bold">Foysal Ahamed Ovi</h1>
                        <p className="mt-5"><span className="font-bold">MERN</span> stack Web Developer with a Passion for Creating Beautiful Websites.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyIntroduction;