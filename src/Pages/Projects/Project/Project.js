import React from 'react';
import { Link } from 'react-router-dom';


const Project = ({ project }) => {
    const {_id, projectName, image, liveSite, githubCode, description } = project;

    return (
        <div className="card grid grid-cols-2 lg:card-side bg-base-100 shadow-xl">
            <figure><img src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{projectName}</h2>
                <p className="text-left">{description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/overview/${_id}`}><button className="btn btn-primary">Project Detail</button></Link>
                    <Link><button className="btn btn-primary"><a href={liveSite}>Live Site</a></button></Link>
                    <Link><button className="btn btn-primary"><a href={githubCode}>Github</a></button></Link>
                </div>
            </div>
        </div>
    );
};

export default Project;