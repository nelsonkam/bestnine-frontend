import React, { Component } from 'react';
import ProjectCard from "./ProjectCard";
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="flex flex-col items-center">
        <h1 className="text-5xl mt-8">Gallerie</h1>
        <p className="text-xl mt-2 text-center">A collection of fun projects based on Unsplash's API</p>
        <br/>
        <div className="flex flex-wrap container">
          <ProjectCard 
            title="Best Nine (Downloads)" 
            subtitle="Showcase the 9 most downloaded pictures of your profile" 
            keyword="people" />
          <ProjectCard 
            title="Best Nine (Likes)" 
            subtitle="Showcase the 9 most liked pictures of your profile"
            keyword="heart" />
        </div>
      </div>
    );
  }
}

export default App;
