import React from 'react';

class MyComp extends React.Component {

	render() {
			return (
				<div>
					<h1>Hello World from MyComp{this.props.whatTosay}</h1>
                    <button onClick={this.props.onClick}>
                        Push Me
                    </button>
				</div>
			)
		}
}

export default MyComp;