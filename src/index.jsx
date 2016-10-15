import React from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'

import App from './components/App'
import About from './components/About/About'
// import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Portfolio from './components/Portfolio/Portfolio'

render(
	<Router history={hashHistory}>
		<Route path='/' component={App}>
			<Route path='/about' component={About} />
			<Route path='/experience' component={Experience} />
			<Route path='/portfolio' component={Portfolio} />
		</Route>
	</Router>, 
	document.getElementById('app')
)