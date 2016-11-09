import React, {Component} from 'react'
// import {Grid, Row, Col} from 'react-bootstrap'

require('./Header.css')

class Header extends Component{

	constructor(){
		super()
		this.getPath = this.getPath.bind(this)
		this.getDate = this.getDate.bind(this)
	}

	getPath(){
		// let pathname = window.location.pathname.substr(1).split('/').join('  /  ')
		// if(this.props.headerData.path)
		// 	return (<p>{pathname}  /  <strong>{this.props.headerData.path}</strong></p>)
	}
	
	getDate(){
		return this.props.headerData.date || ''
	}

	render() {
		return (
			<div id='header'>
				<div className='container' id='header-body'>
					<h3>{this.props.headerData.pageTitle}</h3>
					<div>
						<p className='alignleft'>{this.props.headerData.subTitle}</p>
						<div className='alignright'>
							{this.getPath()} 
							{this.getDate()? <div><i className='fa fa-pencil-square-o'></i> {this.getDate()}</div>:""}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Header