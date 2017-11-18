import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import $ from "jquery";
import Timestamp from "./common/Timestamp"

class DocumentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            documents: null
        };
    }

    render() {
        if (!this.state.documents) {
            return null;
        }

        if (this.state.documents.length == 0) {
            return (
                <div className="wrapper home">
                    no document yet T.T
                </div>
            );
        }

        return (
            <div className="wrapper home">
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
        this.getDocuments();
    }

    getDocuments = () => {
        const qs = queryString.parse(this.props.location.search);
        $.ajax({
            url: "/documents/list-" + (qs.category || "all") + ".json",
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

export default DocumentList;
