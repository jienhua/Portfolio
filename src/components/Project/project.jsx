import React, {Component} from 'react'
import Header from '../Header/Header'

class Project extends Component {

	componentWillMount(){
		const pathname = window.location.pathname.split('/')
		const leng = pathname.length
		const currnet = pathname[leng-1]
		this.state = this.props.data.portfolio.portfolio[currnet]
		console.log(this.state.img)
	}

	render() {
		return (
			<div>
				<Header headerData={this.state.header}/>
				<div className='container'>
					<h2>this is project page</h2>
					<h2>{this.props.params.projectName}</h2>
				</div>
			</div>
		)
	}
}

export default Project