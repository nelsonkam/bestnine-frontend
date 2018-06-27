import React from 'react';
import {Link} from 'react-router-dom';

const ProjectCard = ({title, subtitle, keyword, path}) => (
    <div className="lg:w-1/3 md:w-1/2 p-4" >
      <Link className="no-underline" to={path}>
        <div className="rounded-lg w-full">
          <img className="rounded-lg" src={"https://source.unsplash.com/800x600/?" + keyword} alt=""/>
          <p className="text-2xl font-bold mt-2 text-black no-underline">{title}</p>
          <p className="mt-1 text-black ">{subtitle}</p>
        </div>
      </Link>
    </div>
);
export default ProjectCard;