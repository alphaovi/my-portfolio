import React, { useEffect, useState } from 'react';
import Project from '../Project/Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/projects")
            .then(res => res.json())
            .then(result => setProjects(result))
    }, [])
    return (
        <div>
            {
                projects.map(project => <Project
                    key={project._id}
                    project={project}
                ></Project>)
            }

        </div>
    );
};

export default Projects;