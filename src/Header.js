import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
		<section className="page-header">
	      <h1 className="project-name">Developer Youjin Choi</h1>
	      <h2 className="project-tagline">Hello! I've been working as a full-stack web developer since 2013.<br/>
	      	This page uses React JS!
	      </h2>
	        <Link to="/" className="btn">Home</Link>
	        <a href="https://github.com/youjinchoi" className="btn">GitHub</a>
	        <Link to="/profile" className="btn">Profile</Link>
	        <Link to="/work" className="btn">Work</Link>
	    </section>
    );
  }
}

export default Header;
