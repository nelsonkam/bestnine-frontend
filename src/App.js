import React, { Component } from 'react';
import ProjectCard from "./components/ProjectCard";

class App extends Component {
  render() {
    return (
      <div className="flex flex-col items-center">
        <h1 className="text-5xl mt-8">Gallerie</h1>
        <p className="text-xl mt-2 text-center">A collection of fun projects based on Unsplash's API</p>
        <br/>
        <div className="flex flex-wrap container">
          <ProjectCard 
            title="Best Nine" 
            subtitle="Showcase the 9 most popular pictures of your profile"
            path="/bestnine"
            keyword="popular" />
          
        </div>
      </div>
    );
  }
}

export default App;
