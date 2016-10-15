import React, {Component} from 'react'
import {Link} from 'react-router'

require('./Navbar.css')

const navbar = (
	<div>
		<div id='Navbar'>
			<ul>
				<li><Link to='/about'>About</Link></li>
				<li><Link to='/experience'>Experience</Link></li>
				<li><Link to='/portfolio'>Portfolio</Link></li>
			</ul>
		</div>
	</div>
)


class Navbar extends Component {
	render() {
		return navbar
	}
}

export default Navbar