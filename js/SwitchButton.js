import * as React from 'react';
import '../css/SwitchButton.less';

export class SwitchButton extends React.Component {
	render() {
		return (
			<div className="switch">
				<input id="cmn-toggle-4" className="cmn-toggle cmn-toggle-round" type="checkbox" />
				<label htmlFor="cmn-toggle-4"></label>
			</div>
		);
	}
}