import React, { Component } from 'react';
import TabNav from './components/TabNav.js';
import Main from './components/Main.js';
import './css/main.css';

class Home extends Component {

	constructor() {
		super();
		this.state = {
			classnames: '',
			navs: [
				{name: 'JavaScript', idLink: "javascript-tab", address: '#javascript', lower:"javascript", id: 0},
				{name: 'Java', idLink: "java-tab", address: '#java', lwoer:"java", id: 1}
			]
		}
	}

	render() {
		return (
			<div className={this.state.classnames}>
				<TabNav navs={this.state.navs}/>
				<div className="tab-content" id="myTabContent">
					<Main/>
					<div className="tab-pane fade" id="javascript" role="tabpanel" aria-labelledby="javascript-tab">JAVASCRIPT PAGE ༼ つ ಥ_ಥ ༽つ</div>
					<div className="tab-pane fade" id="java" role="tabpanel" aria-labelledby="java-tab">JAVA PAGE ༼ つ ಥ_ಥ ༽つ</div>
				</div>
			</div>
		);
	}
}

export default Home;
