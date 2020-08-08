import React, { Component } from 'react';
class Social extends React.Component {
  render() {
    let data = this.props.data;
    return (
      <React.Fragment>
          <div className="social-bar">
              {data.social_links.map((link, index) => {
                return <div className="social-link-container">
                    <a href={link.link_url} className={link.class_name} style={{backgroundColor: link.bg_color}}></a>
                </div>
              })}
          </div>
      </React.Fragment>
    );
  }
}

export default Social;