import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log(technologies);
  const technologiesListItems = technologies.map(tech =>{
    return <span key={Math.random()}>{tech}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologiesListItems}
      </div>
    </div>
  );
}

export default ProjectItem;
