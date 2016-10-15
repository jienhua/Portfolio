import React, {Component} from 'react'
import {Link} from 'react-router'

import Header from './Header/Header'

class App extends Component{
	render() {
		return (
			<div>
				<Header/>

				{this.props.children}
			</div>			
		)
	}
}

export default App