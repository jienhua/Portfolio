import React, {Component} from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import Header from '../Header/Header'
require('./About.css')

class About extends Component{
	render(){
		return (
			<div className="about-body">
				<Header headerData={this.props.data.about.header} />
				<div className='container'>
					<hr/>
					<Grid>
						<Row>
							<Col xs={6}>
								<p>
								My name is {this.props.data.about.basicInfo.name}.<br/>
								I am a {this.props.data.about.basicInfo.title}.<br/><br/>
								My favorite programming language is {this.props.data.about.basicInfo.favProgramLang}.<br/>
								I have experience working with _<br/>
								{this.props.data.about.basicInfo.skills.map((skill, index) =>{
									return <spam key={index} className='skill'> <small>#{skill}</small> </spam>
								})}
								</p>
								<hr/>
								<p>
									I love solving problem.<br/>
									I like to think out side of box,<br/>
									And always trying to find a better way to solving the question.<br/>
									Because long, !smart, and repeatedly are just not for me.<br/>
								</p>	
							</Col>
							<Col xs={6}>
							</Col>
						</Row>
					</Grid>	
				</div>
			</div>
		)
	}
}

export default About