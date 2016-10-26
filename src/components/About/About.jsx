import React, {Component} from 'react'
import {Grid, Row, Col, Image} from 'react-bootstrap'
import Header from '../Header/Header'

require('./About.css')

class About extends Component{

	constructor(){
		super()
		this.getHeader = this.getHeader.bind(this)
		console.log(window.location.pathname.substr(1))
	}

	getHeader(){
		const pathname = window.location.pathname.substr(1)
		return this.props.data.header[pathname]
		// <Header headerData={this.getHeader()} />
	}

	render(){
		return (
			<div>
				
				<div className="container" id='about-body'>
					<hr/>
					<Grid className='grid'>
						<Row>
							<Col sm={5} pullRight align-right alignRight>
								<Image id='box-img' src={this.props.data.about.basicInfo.img} alt='thinkOutSideOfBox' responsive/>	
							</Col>
							<Col sm={7}>
								<p>
								My name is {this.props.data.about.basicInfo.name}.<br/>
								I am a {this.props.data.about.basicInfo.title}.<br/><br/>
								My favorite programming language is {this.props.data.about.basicInfo.favProgramLang}.<br/><br/>
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
						</Row>
					</Grid>	
				</div>
			</div>
		)
	}
}

export default About