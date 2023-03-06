import React, { useEffect, useState } from 'react';
import Project from '../Project/Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("projects.json")
            .then(res => res.json())
            .then(result => setProjects(result))
    }, [])
    return (
        <div>
            {
                projects.map(project => <Project
                    key={project.id}
                    project={project}
                ></Project>)
            }

        </div>
    );
};

export default Projects;