import React, { Component } from 'react';

class Main extends Component {

	constructor() {
		super();
		this.state = {
			classnames: 'tab-pane fade show active'
		}
	}

	render() {
		return (
			<div className={this.state.classnames} id="home" role="tabpanel" aria-labelledby="home-tab">
				HOME PAGE ~ (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ ✧ﾟ･: *ヽ(◕ヮ◕ヽ)
			</div>
		);
	}
}

export default Main;