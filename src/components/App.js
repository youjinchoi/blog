import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Profile from './Profile';
import Work from './Work';
import Study from './Study';

const App = () => {
	const colorSet = Math.floor((Math.random() * 5) + 1);
	return (
		<Router>
			<div>
		        <Header colorSet={colorSet}/>
				<div className="page-content">
					<Switch>
						<Route exact path="/" render={() => <Home colorSet={colorSet}/>}/>
						<Route path="/profile" component={Profile}/>
						<Route path="/work" component={Work}/>
						<Route path="/study" component={Study}/>
					</Switch>
				</div>
				<Footer/>
	        </div>
		</Router>
	);
}

export default App;