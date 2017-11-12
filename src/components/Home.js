import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="wrapper home">
                <div className="header-bar">
                    <h1 className={"first-title color" + this.props.colorSet}>DEVELOPER</h1>
                    <h1 className={"first-title color" + this.props.colorSet}>YOUJIN CHOI</h1>
                    <h2 className="description">Hello! I'm a full-stack web developer.<br/>This GitHub Page uses <a href="https://reactjs.org/" target="_blank">React JS</a>!</h2>
                    <br/>
                    <hr/>
                    <br/>
                </div>
            </div>
        );
    }

    getPostList = () => {
        return (
            <ul className="post-list">
             <li>
             <h2><Link className="post-title" to="#">a post with code</Link></h2>
             <p className="post-meta">July 15, 2015 — 15:09</p>
             <p>an example of a blog post with some code</p>
             <br/>
             <hr/>
             </li>
             <li>
             <h2><Link className="post-title" to="#">a post with images</Link></h2>
             <p className="post-meta">May 15, 2015 — 21:01</p>
             <p>this is what included images could look like</p>
             <br/>
             <hr/>
             </li>
             <li>
             <h2><Link className="post-title" to="#">a post with formatting and links</Link></h2>
             <p className="post-meta">March 15, 2015 — 16:40</p>
             <p>march &amp; april, looking forward to summer</p>
             <br/>
             <hr/>
             </li>
             </ul>
        );
    }
}

export default Home;
