import React, {Component} from 'react'
import {Link} from 'react-router'

import Header from './Header/Header'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

require('./App.css')
const data = require('../store/store.json')

class App extends Component{

	render() {
		return (
			<div id='background-image'>
				<Navbar/>
				{this.props.children && React.cloneElement(this.props.children, {data:data})}
				<Footer/>
			</div>			
		)
	}
	// render() {
	// 	return React.cloneElement(this.props.children)
	// }

}

export default App