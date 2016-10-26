import React, {Component} from 'react'
import {Image} from 'react-bootstrap'

require('./common.css')

const Portfolio = (
	<div>
		<Image className='project-head' src='../image/projects/portfolio/head.JPG' thumbnail/>
		<br/>
		<div className='skill-bar'>
			<spam className='skill'>#ReactJS</spam> 
			<spam className='skill'>#NodeJS</spam> 
			<spam className='skill'>#Webpack</spam>
		</div>
		<hr/>
 		<h4>PURPOSE</h4>
		<p>
			The purpose for this project is to practice ReactJS Library. 
			This will be my first project that builds with React. 
			And also I need a portfolio website.
		</p>
		<hr/>
 		<h4>STRUCTURE </h4>
		<p>
			I am using ReactJS for view and React-Router for client side routing. <br/>
			A JSON file is acting like a Redux's store; it has a single object that stores all data for this application.<br/> 
			Webpack is using for bundle up my javascript, css, and others into a bundle. <br/>
			And lastly, a simple express node server is running in back-end.<br/>
		</p>
		<p>Example of my store JSON file</p>
		<Image src='../image/projects/portfolio/store.JPG' responsive/>
		<hr/>
 		<h4>DECISION</h4>
 	
 		<strong>- Single JSON handle all the data</strong>
 		<p>I happened to learn Redux first. One of the differences between Redux and Flux is that, Redux
 		storing its data in one place called store. I had using the samiler method for my Angular project, So that is why I implement my application this way.
 		</p>

 		<strong>- Static component for project page</strong>
 		<p>I want to be able to freely style and changing layout of my project page. I think static component works well for that. 
 		Dynamic generating will requiring a template component, it will limited the possibility of page layout and it makes all the page looks alike.</p>
		
		<hr/>
		<h4>CHALLENGE</h4>
		<strong>- Passing props to the children components</strong>
		<p>React-Router makes passing props a little complcated. Since I do not want to make a data request in every children components 
		instead I want passing data from the Root component to its children.</p>
		<p>The solution for this problem is <code>React.cloneElement()</code> in the Root component. However, this solution pass the whole data
		to each component, which mean each children are able to access the entire data.</p>
		
		<hr/>
		<h4>IMPROVE</h4>
		<ul>
			<li>Find a better way to transfer props from parent component to children component.</li>
			<li>Better UI design for the website.</li>
			<li>Application structure can be cleaner.</li>
		</ul>

		<hr/>
		<h4>SOURCE</h4>
		<p>Github: https://github.com/jienhua/Portfolio</p>
		<p>Demo: https://jienhua-portfolio.herokuapp.com/</p>
 	</div>
)

export default Portfolio