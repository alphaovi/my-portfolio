import React from 'react';

const PageDevider = () => {
    return (
        <div>
            <div className="flex flex-col w-full border-opacity-50">
                <div className="divider">OR</div>
                <div>
                    <button className="mb-5 btn btn-primary">Sign In With Google</button>
                    <button className="mb-5 btn">Sign In With Github</button>
                    
                </div>
            </div>
        </div>
    );
};

export default PageDevider;