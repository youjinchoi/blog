import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Profile from './Profile';
import Work from './Work';
import Portfolio from './Portfolio';

const App = () => {
	return (
		<Router>
			<div>
		        <Header/>
				<div className="page-content">
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route path="/profile" component={Profile}/>
						<Route path="/work" component={Work}/>
						<Route path="/portfolio" component={Portfolio}/>
					</Switch>
				</div>
				<Footer/>
	        </div>
		</Router>
	);
}

export default App;