import '../css/main.css';
import React, {Component} from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

class AceEdit extends Component {

	onChange = (newValue) => {
		//var input = newValue;
		//var output = transform(input, { presets: ['es2015'] }).code;
		console.log(newValue);
	};

	render() {
		return (
		<AceEditor
			mode="javascript"
			theme="monokai"
			name="blah2"
			className="editor"
			height="350px"
			width="100%"
			onLoad={this.onLoad}
			onChange={this.onChange}
			fontSize={14}
			showPrintMargin={true}
			showGutter={true}
			highlightActiveLine={true}
			value={`function onLoad() {
	console.log("i've loaded");
}`}
			setOptions={{
				showLineNumbers: true,
				tabSize: 4,
			}}
		/>
		)
	}
}

export default AceEdit;