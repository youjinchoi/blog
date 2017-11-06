import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Profile from './Profile';
import Work from './Work';

const App = () => {
	return (
		<Router>
			<div>
		        <Header/>
		        <section className="main-content">
		        	<Switch>
		        		<Route exact path="/" component={Home}/>
		        		<Route path="/profile" component={Profile}/>
		        		<Route path="/work" component={Work}/>
		        	</Switch>
		        	<Footer/>
		        </section>
	        </div>
		</Router>
	);
}

export default App;