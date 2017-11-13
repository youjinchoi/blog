import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from "jquery";
import Timestamp from "./common/Timestamp"

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            documents: []
        };
    }

    render() {
        return (
            <div className="wrapper home">
                <div className="header-bar">
                    <h1 className={"first-title color" + this.props.colorSet}>DEVELOPER</h1>
                    <h1 className={"second-title color" + this.props.colorSet}>YOUJIN CHOI</h1>
                    <h2 className="description">Hello! I'm a full-stack web developer.<br/>This GitHub Page uses <a className={"hoverColor" + this.props.colorSet} href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React JS</a>!</h2>
                    <br/>
                    <hr/>
                    <br/>
                </div>
                <ul className="post-list">
                    {this.state.documents.map((document, index) => {
                        return (
                            <li key={index}>
                                <h2><Link className={"post-title hoverColor" + this.props.colorSet} to={"/documents/" + document.id}>{document.title}</Link></h2>
                                <p className="post-meta"><Timestamp timestamp={document.createDate}/></p>
                                <p>{document.summary}</p>
                                <br/>
                                <hr/>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }

    componentDidMount() {
        this.getRecentDocuments();
    }

    getRecentDocuments = () => {
        $.ajax({
            url: "/documents/list.json",
            type: "get",
            dataType: "json",
            success: function(resp) {
                this.setState({
                    documents: resp
                });
            }.bind(this),
            error: function(resp, err) {
            },
            timeout: 2000
        });
    }
}

export default Home;
