import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="wrapper">
            <div className="header-bar">
                <h1>Developer</h1>
                <h1>Youjin Choi</h1>
                <h2>Hello! I've been working as a full-stack web developer since 2013. This GitHub Page uses React JS!</h2>
                <br/>
                    <hr/>
                <br/>
            </div>
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
        </div>
    );
}

export default Home;
