import React, {Component} from 'react'

class Project extends Component {
	render() {
		return (
			<div className='container'>
				<h2>this is project page</h2>
				<h2>{this.props.params.projectName}</h2>
			</div>
		)
	}
}

export default Project