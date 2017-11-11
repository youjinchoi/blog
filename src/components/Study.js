import React from 'react';

const Study = () => {
    return (
        <div className="wrapper">
            <div className="post">
                <header className="post-header">
                    <h1 className="post-title">study</h1>
                    <h5 className="post-description"></h5>
                </header>
                <article className="post-content">
                    <div className="project ">
                        <div className="thumbnail">
                            <a href="#">
                                <img className="thumbnail" src="/static/ds.jpg"/>
                            <span>
                                <h1>Basic</h1>
                                <br/>
                                <p>Data Structures<br/>and<br/>Algorithms</p>
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
