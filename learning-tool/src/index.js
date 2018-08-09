import React from 'react';
import ReactDOM from 'react-dom';
import { 
	BrowserRouter as Router,
	Switch,
	Route,
	Link 
} from 'react-router-dom';
import './index.css';
import Home from './Home.js';

import registerServiceWorker from './registerServiceWorker';

const Header = () => (
	<header>
		<h3>Coding Reminders</h3>
		<h5><i>Learning tool</i></h5>
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
		<Main/>
	</div>
)

ReactDOM.render(
	(<Router>
		<App/>
	</Router>
	),document.getElementById('root')
);
registerServiceWorker();
