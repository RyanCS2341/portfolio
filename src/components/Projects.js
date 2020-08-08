import React, { Component } from 'react';
class Projects extends React.Component {
  render() {
    let data = this.props.data;
    // <div className="project-description">{project.description}</div>
    return (
      <div className="projects-container" id="projects">
          <div className="row container">
            {data.projects.map((project, index) => {
                return <div className="col-md-6 project-card-container">
                    <div className="project-card">
                        <div className="project-image">
                            <img src={project.img_url} alt=""/>
                        </div>
                        <div className="project-title">{project.name}</div>
                    </div>
                </div>
            })}
          </div>
      </div>
    );
  }
}

export default Projects;