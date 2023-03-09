import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Overview = () => {
    const {projectName} = useLoaderData();
    return (
        <div>
            <h3>Over View Full Project: {projectName} </h3>
        </div>
    );
};

export default Overview;