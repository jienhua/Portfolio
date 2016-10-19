import React, {Component} from 'react'
import {Grid, Row, Col, Thumbnail} from 'react-bootstrap'


class Portfolio extends Component {

	render() {
		return (
			<div className='container'>
				portfolio page
				<hr/>
				<Grid id='portfolio_box'>
					<Col md={4}>
						<Thumbnail src="../../image/portfolio/temp.png" alt="242x200">
					        <h3>Thumbnail label</h3>
					        <p>Description</p>
      					</Thumbnail>	
					</Col>
					<Col md={4}>
						<Thumbnail src="../../image/portfolio/temp.png" alt="242x200">
					        <h3>Thumbnail label</h3>
					        <p>Description</p>
      					</Thumbnail>
					</Col>
					<Col md={4}>
						<Thumbnail src="../../image/portfolio/temp.png" alt="242x200">
					        <h3>Thumbnail label</h3>
					        <p>Description</p>
      					</Thumbnail>
					</Col>
				</Grid>
				
			</div>
		);
	}
}

export default Portfolio