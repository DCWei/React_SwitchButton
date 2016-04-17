import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SwitchButton } from './SwitchButton';

class Main extends React.Component {
	render() {
		return (
			<div className="main">
				<SwitchButton />
			</div>
		);
	}
}

ReactDOM.render(
	<Main />,
	document.getElementById('container')
);
