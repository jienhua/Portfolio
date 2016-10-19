import React, {Component} from 'react'

require('./About.css')

class About extends Component{
	render(){
		return (
			<div className='container'>
				<h1>about test</h1>
				<hr/>
				My name is {this.props.data.about.basicInfo.name}.<br/>
				I am a {this.props.data.about.basicInfo.title}.<br/><br/>
				My favorite programming language is {this.props.data.about.basicInfo.favProgramLang}<br/>
				Skills<br/>
					{this.props.data.about.basicInfo.skills.map((skill, index) =>{
						return <spam key={index} className='skill'> <small>#{skill}</small> </spam>
					})}

			</div>
		)
	}
}

export default About