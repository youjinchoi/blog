import React, { Component } from 'react';
import $ from "jquery";
import Timestamp from "./common/Timestamp";

class Document extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        if (!this.state.document) {
            return null;
        }
        return (
            <div className="wrapper">
                <div className="post">
                    <header className="post-header">
                        <h1 className="post-title">{this.state.document.title}</h1>
                        <p className="post-meta"><Timestamp timestamp={this.state.document.createDate}/></p>
                    </header>
                    <article className="post-content">
                        {this.state.document.contents.map((content, index) => {
                            if (content.type == "text") {
                                return (
                                    <p key={index}>{content.value}</p>
                                );
                            } else if (content.type == "h4") {
                            	return (
                            	    <h4 key={index}>{content.value}</h4>
                            	);
                        	} else if (content.type == "ul") {
                        		return (
                        		    <ul>
                        		    	{content.value.map((data, index)=>{
                        		    		return (
                        		    		    <li>{data}</li>		
                        		    		);
                        		    	})}
                        		    </ul>		
                        		);
                        	} else {
                                return null;
                            }
                        })}
                    </article>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.getDocument(this.props.match.params.documentId);
    }

    getDocument(documentId) {
        $.ajax({
            url: "/documents/" + documentId + ".json",
            type: "get",
            dataType: "json",
            success: function(resp) {
                this.setState({
                    document: resp
                });
            }.bind(this),
            error: function(resp, err) {
            },
            timeout: 2000
        });
    }
}

export default Document;