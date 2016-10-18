import React, {Component} from 'react'

require('./Experience.css')

class Experience extends Component{

	render() {
		return (
			<div className='container'>
				<div id='exp-body'>
					<h1>Experience</h1>
					<hr />
					{this.props.data.experience.map((exp,index) => {
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