import React, { Component } from 'react';

class TabNav extends Component {

	constructor() {
		super();
		this.state = {
			classnames: ''
		}
	}

	render() {
		return (
			<div className={this.state.classnames}>
				<ul className="nav nav-tabs" id="myTab" role="tablist">
					<li className="nav-item">
						<a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
					</li>
					{this.props.navs.map(link =>
						<li className="nav-item" key={link.id}>
							<a className="nav-link" id={link.idLink} data-toggle="tab" href={link.address} role="tab" aria-controls={link.lower} aria-selected="false">{link.name}</a>
						</li>
					)}
				</ul>
			</div>
		);
	}
}

export default TabNav;