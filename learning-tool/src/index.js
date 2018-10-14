import React from 'react';
import ReactDOM from 'react-dom';
import { 
	BrowserRouter as Router,
	Switch,
	Route,
	Link 
} from 'react-router-dom';
import './index.css';
import './css/main.css';

import Home from './Home.js';
import FullWidthTabs from './components/TabContainer';

import registerServiceWorker from './registerServiceWorker';

const Header = () => (
	<header>
		<h3 className="title">Coding Reminders</h3>
		<h5 className="subtitle"><i>Learning tool</i></h5>
	</header>
)
//<Route path='/playlists' component={Home}/>
const Main = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Home}/>
		</Switch>
	</main>
)

const App = () => (
	<div className="container">
		<Header/>
		<FullWidthTabs/>
	</div>
)

ReactDOM.render(
	(<Router>
		<App/>
	</Router>
	),document.getElementById('root')
);
registerServiceWorker();
