import React from 'react';
import { Link } from 'react-router-dom';

const Study = () => {
    return (
        <div className="wrapper">
            <div className="post">
                <header className="post-header">
                    <h1 className="post-title">study</h1>
                </header>
                <article className="post-content">
                    <div className="project ">
                        <div className="thumbnail">
                            <Link to="/documents?category=basic">
                                <img className="thumbnail" src="/static/basic.jpg"/>
                                <span>
                                    <h1>Basic</h1>
                                    <br/>
                                    <p>Data Structures<br/>Algorithms</p>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="project ">
                        <div className="thumbnail">
                            <Link to="/documents?category=frontend">
                                <img className="thumbnail" src="/static/frontend.jpg"/>
                                <span>
                                    <h1>Front End</h1>
                                    <br/>
                                    <p>JavaScript<br/>ReactJS</p>
                                </span>
                            </Link>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}

export default Study;
