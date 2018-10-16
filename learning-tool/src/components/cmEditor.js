import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/midnight.css';
import 'codemirror/mode/jsx/jsx';
import React, { Component } from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

class CodeMirrorEditor extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const options = {
			theme:'midnight',
			mode:'javascript',
			lineNumbers: true,
		}
		return(
			<div>
				<CodeMirror
					value={this.props.val}
					options={options}
					onBeforeChange={(editor, data, value) => {
					}}
					onChange={(editor, data, value) => {
						console.log(value);
					}}
				/>
			</div>
		)
	}
}

export default CodeMirrorEditor;