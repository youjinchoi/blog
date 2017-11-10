import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
        <footer className="site-footer">
            <div className="wrapper">
                <p>This site was built using <a href="http://jekyllrb.com" target="_blank">Jekyll</a> and is hosted on <a href="https://github.com" target="_blank">Github</a> Photos from <a href="https://unsplash.com" target="_blank">Unsplash</a> and text generated with <a href="http://hipsum.co" target="_blank">Hipster Ipsum</a>. © 2015</p>
            </div>
        </footer>
    );
  }
}

export default Footer;
