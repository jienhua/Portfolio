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
	}

	handleClick(path){
		// let pathname = window.location.pathname
		// if(pathname === '/'){
		// 	pathname = 'portfolio'
		// }
		// pathname = pathname.concat('/').concat(key)
		browserHistory.push(path)
	}

	render() {
		return (
			<div>
				<Header headerData={this.props.data.portfolio.header}/>
				<div className='container' id='portfolio_body'>
					<hr/>
					<Grid id='grid'>
						{Object.keys(this.props.data.portfolio.portfolio).map((key, index)=>{
							const item = this.props.data.portfolio.portfolio[key]
							return (
									<Col  className='mythumbnail' key={index} xs={3} sm={4}>
										<div onClick={this.handleClick.bind(null, item.header.path)}>
											<Image src={item.img} alt='t1' thumbnail />
										</div>
										<div className='caption'>
											<h5>{item.header.pageTitle}</h5>
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