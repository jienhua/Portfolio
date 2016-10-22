import React from 'react'
import {render} from 'react-dom'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

import App from './components/App'
import About from './components/About/About'
// import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Portfolio from './components/Portfolio/Portfolio'
import Project from './components/Project/Project'

const routes = 	<Route path='/' component={App}>
					<IndexRoute component={Portfolio} />
					<Route path='/about' component={About} />
					<Route path='/experience' component={Experience} />
					<Route path='/portfolio' component={Portfolio}/>
					<Route path='/portfolio/:projectName' component={Project}/>
					<Route path='*' component={Portfolio}/>
				</Route>

render(
	<Router history={browserHistory}>
		{routes}
	</Router>, 
	document.getElementById('app')
)