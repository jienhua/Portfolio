import React, {Component} from 'react'
import {Grid, Row, Col, Image} from 'react-bootstrap'
import Header from '../Header/Header'

require('./About.css')

class About extends Component{
	render(){
		return (
			<div>
				<Header headerData={this.props.data.about.header} />
				<div className="about-body container">
					<hr/>
					<Grid>
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