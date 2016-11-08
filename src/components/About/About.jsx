import React, {Component} from 'react'
import {Grid, Row, Col, Image} from 'react-bootstrap'
import Header from '../Header/Header'

require('./About.css')

class About extends Component{

	constructor(){
		super()
		this.getHeader = this.getHeader.bind(this)
	}

	getHeader(){
		const pathname = window.location.pathname.substr(1)
		return this.props.data.header[pathname]
	}

	render(){
		return (
			<div>
				<Header headerData={this.getHeader()} />
				<div className="container" id='about-body'>
					<hr/>
					<Grid className='grid'>
						<Row>
							<Col sm={5} pullRight align-right alignRight>
								<Image id='box-img' src={this.props.data.about.basicInfo.img} alt={this.props.data.about.basicInfo.alt} responsive/>	
							</Col>
							<Col sm={7}>
								<p>
								My name is {this.props.data.about.basicInfo.name}.<br/>
								I am a {this.props.data.about.basicInfo.title}.<br/><br/>
								My favorite programming language is {this.props.data.about.basicInfo.favProgramLang}.<br/>
								I am fluent in {this.props.data.about.basicInfo.lang.join(', ')}.
								</p>
								<hr/>
								<p>
									I love solving problem.<br/>
									I like to think out side of box,<br/>
									And always trying to find a better way to solving the question.<br/>
									Because long, !smart, and repeatedly are just not for me.<br/>
								</p>	
							</Col>
						</Row>
					</Grid>	
				</div>
			</div>
		)
	}
}

export default About