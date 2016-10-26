import React, {Component} from 'react'
import Header from '../Header/Header'

require('./Experience.css')

class Experience extends Component{
	
	constructor(){
		super()
		this.getHeader = this.getHeader.bind(this)
	}

	getHeader(){
		const pathname = window.location.pathname.substr(1)
		return this.props.data.header[pathname]
	}
	
	render() {
		return (
			<div>
				<Header headerData={this.getHeader()} />
				<div id='exp-body' className='container'>
					<hr/>
					{this.props.data.experience.experience.map((exp,index) => {
						return (
							<div key={index}>
								<h3>{exp.title} <small>{exp.date}</small></h3>
								<h5>{exp.company} <small>{exp.location}</small></h5>
								<br/>
								<ul>
									{exp.duties.map((duty, index) => {
										return <li key={index}>{duty}</li>
									})}
								</ul>
								<hr/>
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}

export default Experience