import React, {Component} from 'react'
// import {Grid, Row, Col} from 'react-bootstrap'

require('./Header.css')

class Header extends Component{

	render() {
		return (
			<div id='header'>
				<div className='container' id='header-body'>
					<h3>{this.props.headerData.pageTitle}</h3>
					<div>
						<p className='alignleft'>{this.props.headerData.subTitle}</p>
						<div className='alignright'>
							{this.getPath()} 
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Header