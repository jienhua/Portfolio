import React, {Component} from 'react'
import {Grid, Row, Col, Thumbnail, Image} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import {Link, browserHistory} from 'react-router'
import Header from '../Header/Header'


require('./Portfolio.css')

class Portfolio extends Component {

	constructor(){
		super()
		this.handleClick = this.handleClick.bind(this)
		this.getHeader = this.getHeader.bind(this)
		
	}

	handleClick(path){
		browserHistory.push(path)
	}

	getHeader(){
		let pathname = window.location.pathname.substr(1)
		if(pathname === ''){
			pathname = 'portfolios'
		}
		return this.props.data.header[pathname]
		// <Header headerData={this.getHeader()}/>
	}

	render() {
		return (
			<div>
				<Header headerData={this.getHeader()}/>
				<div className='container' id='portfolio_body'>
					<hr/>
					<Grid className='grid'>
						{Object.keys(this.props.data.portfolios.portfolio).map((key, index)=>{
							const item = this.props.data.portfolios.portfolio[key]
							return (
									<Col  className='mythumbnail' key={index} sm={6} md={3}>
										<div onClick={this.handleClick.bind(null, this.props.data.header[key].path)}>
											<Image src={item.img} alt='t1' thumbnail responsive/>
										</div>
										<div className='caption'>
											<h5>{this.props.data.header[key].pageTitle}</h5>
											<p>
												{item.buildUsd.map((i, index) =>{
													return <spam key={index} className='skill'> <small>#{i}</small> </spam>
												})}
											</p>
										</div>
									</Col>
								)
						})}
					</Grid>
					
				</div>
			</div>
		);
	}
}

export default Portfolio


