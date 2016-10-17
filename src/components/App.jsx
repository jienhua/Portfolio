import React, {Component} from 'react'
import {Link} from 'react-router'

import Header from './Header/Header'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

require('./App.css')

class App extends Component{
	render() {
		return (
			<div id='background-image'>
				<Navbar/>
				<Header/>
				{this.props.children}

				<Footer/>
			</div>			
		)
	}
}

export default App