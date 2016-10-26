import React, {Component} from 'react'
import Header from '../Header/Header'
import {Grid, Row, Col} from 'react-bootstrap'

import ProjectTemplates from './projects'

require('./project.css')

class Project extends Component {

	constructor(){
		super()
		this.getHeader = this.getHeader.bind(this)
		this.getTemplate = this.getTemplate.bind(this)
	}

	getHeader(){
		const pathname = this.props.params.projectName
		return this.props.data.header[pathname]
	}

	getTemplate(){
		const pathname = this.props.params.projectName
		return ProjectTemplates[pathname]
	}

	render() {
		return (
			<div>
				<Header headerData={this.getHeader()}/>
				<div className='container' id='project-body'>
					{this.getTemplate()}
				</div>
			</div>
		)
	}
}

export default Project

// {this.props.data.portfolios.portfolio[this.props.project].purpose? 'yes':'no'}