import React, { Component } from 'react';

class SliderPrevious extends Component {
	static propTypes = {
		action: React.PropTypes.func
	};

	render() {
		return (
			<button onClick={this.handleClick} className="arrow arrow--left push__lg--2">
				<i className="icon icon--arrow" />
			</button>
		);
	}

	handleClick = () => {
		this.props.action();
	}
}

export default SliderPrevious;
