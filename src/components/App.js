import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './gnb/Header';
import Footer from './gnb/Footer';
import Home from './Home';
import Profile from './Profile';
import Work from './Work';
import Study from './Study';
import DocumentList from './DocumentList';
import Document from './Document';

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
						<Route exact path="/study" component={Study}/>
						<Route exact path="/documents" render={(routeProps) => <DocumentList {...routeProps } colorSet={colorSet}/>}/>
						<Route exact path="/documents/:documentId" component={Document}/>
					</Switch>
				</div>
				<Footer/>
	        </div>
		</Router>
	);
}

export default App;