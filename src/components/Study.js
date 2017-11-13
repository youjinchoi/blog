import React from 'react';

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
                            <a href="#">
                                <img className="thumbnail" src="/static/ds.jpg"/>
                                <span>
                                    <h1>Basic</h1>
                                    <br/>
                                    <p>Data Structures<br/>Algorithms</p>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="project ">
                        <div className="thumbnail">
                            <a href="#">
                                <img className="thumbnail" src="/static/frontend.jpg"/>
                                <span>
                                    <h1>Front End</h1>
                                    <br/>
                                    <p>JavaScript<br/>ReactJS</p>
                                </span>
                            </a>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}

export default Study;
