import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
	return (
		<div>
			<header className="site-header">
				<div className="wrapper">
					<nav className="site-nav">
						<div className="trigger">
							<Link className={"page-link hoverColor" + this.props.colorSet} to="/">home</Link>
							<Link className={"page-link hoverColor" + this.props.colorSet} to="/profile">profile</Link>
							<Link className={"page-link hoverColor" + this.props.colorSet} to="/work">work</Link>
							<Link className={"page-link hoverColor" + this.props.colorSet} to="/study">study</Link>
						</div>
					</nav>
				</div>
			</header>
		</div>
    );
  }
}

export default Header;
