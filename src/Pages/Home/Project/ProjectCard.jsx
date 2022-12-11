import React from "react";

const ProjectCard = ({project}) => {
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img src={project.ProjectImg} className="rounded" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {project.ProjectName}
           
          </h2>
          <p className="text-xl">{project.ProjectDec.length >100 ? <>{project.ProjectDec.slice(0,50) + "..."} </> : project.ProjectDec }</p>
          <div className="card-actions justify-end">
            <div className="badge badge-info" ><a target="_blank" rel="noreferrer" href={project.Live}>Live</a></div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
