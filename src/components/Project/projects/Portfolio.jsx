import React, {Component} from 'react'
import {Image} from 'react-bootstrap'

const Portfolio = (
	<div>
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
 		storing its data in a same place called store. That is why I implement my application this way.
 		</p>

 		<strong>- Static component for projects</strong>
 		<p>I make all my project components static instead dynamic generating from JSON. 
 		I found that difficult to style and change layout with dynamic generating; also it makes every components looks alike.
 		I want to use my project page to explain my idea behind each project. And I want the layout and front to be casual and little
 		informal. Static component works best for it.
 		</p>
		<h4>PROBLEMS</h4>
		<h4>IMPROVE</h4>
 	</div>
)

export default Portfolio