import React from 'react';


const Project = ({ project }) => {
    const { projectName, image, liveSite, githubCode, description } = project;

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{projectName}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">

                    <button className="btn btn-primary"><a href={liveSite}>Live Site</a></button>
                    <button className="btn btn-primary"><a href={githubCode}>Github</a></button>
                </div>
            </div>
        </div>
    );
};

export default Project;