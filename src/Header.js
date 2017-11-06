import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
		<section className="page-header">
	      <h1 className="project-name">Developer Youjin Choi</h1>
	      <h2 className="project-tagline">Hi! I've been working as a full-stack web developer since 2013.</h2>
	        <a href="https://github.com/youjinchoi" className="btn">GitHub</a>
	        <a href="#" className="btn">Profile</a>
	        <a href="#" className="btn">Works</a>
	    </section>
    );
  }
}

export default Header;
