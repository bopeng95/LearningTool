import '../css/normalize.css';
import '../css/skeleton.css';
import React, { Component } from 'react';
//import CodeMirrorEditor from './cmEditor';
import AceEditor from './aceEditor';

class Javascript extends Component {

	constructor(props) {
		super(props);
		this.state = {
			value: 'function hello() {\n\tconsole.log(\'hello world\');\n}\nhello();'
		}
	}

	render() {
		return (
			<div>
				<div className="row">
					<div className="one-half column">
						<AceEditor/>
					</div>
					<div className="one-half column">
						HI
					</div>
				</div>
			</div>
		);
	}
}

export default Javascript;