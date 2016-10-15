import React, {Component} from 'react'
import {Link} from 'react-router'

import Header from './Header/Header'
import Navbar from './Navbar/Navbar'

class App extends Component{
	render() {
		return (
			<div>
				<Navbar/>
				<Header/>

				{this.props.children}
			</div>			
		)
	}
}

export default App