import React from 'react';

const ProjectCard = ({title, subtitle, keyword}) => (
  <div className="lg:w-1/3 md:w-1/2 p-4" >
    <div className="rounded-lg w-full">
      <img className="rounded-lg" src={"https://source.unsplash.com/800x600/?" + keyword} alt=""/>
      <p className="text-2xl font-bold mt-2">{title}</p>
      <p className="mt-1">{subtitle}</p>
    </div>
  </div>
);
export default ProjectCard;