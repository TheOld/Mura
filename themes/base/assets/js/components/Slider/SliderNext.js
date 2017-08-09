import React, { Component } from 'react';

class SliderNext extends Component {
	static propTypes = {
		action: React.PropTypes.func
	};
	render() {
		return (
			<button onClick={this.handleClick} className="arrow arrow--right pull__lg--2">
				<i className="icon icon--arrow" />
			</button>
		);
	}
	handleClick = () => {
		this.props.action();
	}
}

export default SliderNext;
