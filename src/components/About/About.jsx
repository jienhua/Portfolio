import React, {Component} from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import Header from '../Header/Header'
require('./About.css')

class About extends Component{
	render(){
		return (
			<div>
				<Header headerData={this.props.data.about.header} />
				<div className='container about-body'>
					<hr/>
					<Grid>
						<Row>
							<Col xs={6}>
								My name is {this.props.data.about.basicInfo.name}.<br/>
								I am a {this.props.data.about.basicInfo.title}.<br/><br/>
								My favorite programming language is {this.props.data.about.basicInfo.favProgramLang}<br/>
								Skills<br/>
								{this.props.data.about.basicInfo.skills.map((skill, index) =>{
									return <spam key={index} className='skill'> <small>#{skill}</small> </spam>
								})}
							</Col>
							<Col xs={6}>
								right
							</Col>
						</Row>
					</Grid>	
				</div>
			</div>
		)
	}
}

export default About