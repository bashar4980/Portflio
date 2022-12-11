import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const Project = () => {
    const [project , setProject] = useState([]);
    console.log(project)
    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setProject(data))
    },[])
    return (
        <div className='py-20 container mx-auto' id="project">
            <h1 className='text-3xl font-bold text-center mb-10'>My Recent Work</h1>
           <div className='grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 gap-4'>
           {
                project.map(project => <ProjectCard key={project.id} project={project}></ProjectCard>)
            } 
           </div>
        </div>
    );
};

export default Project;