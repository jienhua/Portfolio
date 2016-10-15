import React, {Component} from 'react'

import Navbar from '../Navbar/Navbar'

require('./Header.css')

const header = (
	<div id='header'>
		<h1>header1</h1>
		<Navbar/>
	</div>
)

class Header extends Component{
	render() {
		return header
	}
}

export default Header