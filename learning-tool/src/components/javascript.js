import '../css/normalize.css';
import '../css/skeleton.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/midnight.css';
import 'codemirror/mode/jsx/jsx';
import React, { Component } from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

class Javascript extends Component {

	constructor(props) {
		super(props);
		this.state = {
			value: 'function hello() {\n\tconsole.log(\'hello world\');\n}'
		}
	}

	render() {

		const options = {
			theme:'midnight',
			mode:'javascript',
			lineNumbers: true,
		}

		return (
			<div>
				<div className="row">
					<div className="one-half column">
						<CodeMirror
							value={this.state.value}
							options={options}
							onBeforeChange={(editor, data, value) => {
								this.setState({value});
							}}
							onChange={(editor, data, value) => {
							}}
						/>
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