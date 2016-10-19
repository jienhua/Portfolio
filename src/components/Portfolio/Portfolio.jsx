import React, {Component} from 'react'
import {Grid, Row, Col, Thumbnail, Image} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import {Link, browserHistory} from 'react-router'

require('./Portfolio.css')

class Portfolio extends Component {

	constructor(){
		super();
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(){
		const pathname = window.location.pathname
		const path = `/portfolio/portfolio`
		browserHistory.push(path)
	}

	render() {
		return (
			<div className='container'>
				portfolio page
				<hr/>
				<Grid id='portfolio_box'>
					<Col sm={6} md={3}>
						<div className='mythumbnail' onClick={this.handleClick}>
							<Image src="../../image/portfolio/temp.png" alt='t1' thumbnail />
						</div>
						<h5>label</h5>
						<p>descriptiotn</p>
					</Col>
					<Col sm={6} md={3}>
						<div className='mythumbnail'>
							<Image src="../../image/portfolio/temp.png" alt='t1' thumbnail />
						</div>
					    <h3>Thumbnail label</h3>
					    <p>Description</p>
					</Col>
					<Col sm={6} md={3}>
						<div className='mythumbnail'>
							<Image src="../../image/portfolio/temp.png" alt='t1' thumbnail />
						</div>
					    <h3>Thumbnail label</h3>
					    <p>Description</p>
					</Col>
				</Grid>
				<Link to='/portfolio/portfolio'>Portfolio page</Link>
			</div>
		);
	}
}

export default Portfolio