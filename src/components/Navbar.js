import React, { Component } from 'react';
import pdf from '../pdf/resume_2020.PDF'
class Navbar extends React.Component {
  render() {
    let data = this.props.data;
    return (
      <React.Fragment>
          <div className="header">
            <div className="container">
              <div className="nav-bar">
                <div></div>
                <div className="nav-links">
                  <a href="#particles-js" className="nav-link">Home</a>
                  <a href="#about" className="nav-link">About</a>
                  <a href="#projects" className="nav-link">Projects</a>
                  <a href={pdf} className="nav-link" target="_blank">Resume</a>
                </div>
              </div>
            </div>
          </div>
      </React.Fragment>
    );
  }
}

export default Navbar;