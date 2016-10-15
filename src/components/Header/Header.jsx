import React, {Component} from 'react'

require('./Header.css')

const header = (
	<div id='header'>
		<h1>header1</h1>
	</div>
)

class Header extends Component{
	render() {
		return header
	}
}

export default Header