import React, { Component } from 'react';
class About extends React.Component {
  render() {
    let data = this.props.data;
    return (
      <React.Fragment>
          <div id="about" className="about container">
            <div className="about-container">
              <div className="headshot-container">
                <img className="headshot" src="/assests/headshot.png" alt=""/>
              </div>
              <div className="about-info">
                <h3 className="about-header">About Me</h3>
                <div>
                  <div className="info-box">Software engineer focused on building and delivering high-quality, scalable solutions that exceed the expectations of each client. A dedicated learner who researches the latest technologies to stay knowledgable, engaged, and prepared to implement software solutions.</div>
                  <div className="info-box">Studied mathematics with particular interests in computer science and software engineering. Demonstrated excellence in academics, analytical research, and collaborative software development environments.</div>
                </div>
              </div>
            </div>
          </div>
      </React.Fragment>
    );
  }
}

export default About;