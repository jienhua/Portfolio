import React, {Component} from 'react'
import {Grid, Row, Col, Glyphicon} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

require('./Footer.css')

const footer = (
	<div id='footer'>
		<Grid>
			<Row className="show-grid">
				<Col sm={3} smOffset={3}>
					<h4 className='footerTitle'>Contact</h4>
					<h5><Glyphicon glyph="map-marker"/> Fremont, California USA</h5>
					<h5><Glyphicon glyph="envelope"/> jien8013@hotmail.com</h5>
					<h5><Glyphicon glyph="phone"/> (510) 320-4552</h5>
				</Col>
				<Col sm={5} smOffset={1}>
					<h4 className='footerTitle'>Follow Me on</h4>
					<a href="https://www.linkedin.com/in/jien-hua-9b795471"
					   target="_blank">
						<FontAwesome
				    	className='linkedin-square icon'
				        name='linkedin-square'
				        size='2x'
				    	/>
				    </a>
				    <a href="https://github.com/jienhua"
					   target="_blank">
					    <FontAwesome
					    	className='github-square icon'
					        name='github-square'
					        size='2x'
					    />
				    </a>
				    <a href="#"
					   target="_blank">
					    <FontAwesome
					    	className='facebook-square icon'
					        name='facebook-square'
					        size='2x'
					    />
				    </a>
				    <a href="#"
					   target="_blank">
					    <FontAwesome
					    	className='twitter-square icon'
					        name='twitter-square'
					        size='2x'
					    />
				    </a>
				</Col>
			</Row>
		</Grid>
		<div className='text-center copyright'>Copyright <FontAwesome name='copyright'/> 2016 - Jien Hua</div>
	</div>
)

class Footer extends Component {
	render() {
		return footer
	}
}

export default Footer