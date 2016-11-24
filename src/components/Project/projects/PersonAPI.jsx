import React, {Component} from 'react'
import {Image, Row, Col} from 'react-bootstrap'


const PersonAPI = (
	<div>
		<div className='container-fluid'>
			<Image className='project-head' src='../image/projects/PersonAPI/thumbnail2.JPG' thumbnail/>
			<br/>
			<div className='skill-bar'>
				<spam className='skill'>#ReactJS</spam> 
				<spam className='skill'>#Redux</spam>
				<spam className='skill'>#Redux-Thunk</spam>
				<spam className='skill'>#Axios</spam>
				<spam className='skill'>#NodeJS</spam> 
				<spam className='skill'>#MongoDB</spam> 
				<spam className='skill'>#Webpack</spam>
			</div>
		</div>

		<div className='container-fluid'>
			<hr />
			<h4>ABOUT</h4>
			<p>This PersonAPI project allow user to create person list. User will be able to create a new person, edit an exist person, 
				delete an exist person, and search for a person. 
			</p>
		</div>

		<div className='container-fluid'>
			<hr/>
			<h4>PURPOSE</h4>
			<p>
				The purpose for this project is to helping myself get more familiar with Redux, making API calls, and handling Asynchronous calls.
			</p>
		</div>

		<div className='container-fluid'>
			<hr/>
			<h4># FUNCTIONS - API List</h4>

			<h5><strong>Connect to Datebase</strong></h5>
			<h5>- GET <code>/connectDB</code>  // request to connect local MongoDB</h5>
			<p>In order for this application to start working, it will require MongoDB up and running. Application will not auto connect to the 
			MongoDB. User will have to connect MongoDB manually by click the localhost button on the control panel.</p>
			<Row>
				<Col sm={6}>
					<Image className='project-head' alt='notConnect' src='../image/projects/PersonAPI/notConnect.JPG' thumbnail/>
				</Col>
				<Col sm={6}>
					<Image className='project-head' alt='connected' src='../image/projects/PersonAPI/connected.JPG' thumbnail/>
				</Col>
			</Row>
			<h5><strong>Search</strong></h5>
			<h5>- GET <code>/person</code>  // Return All</h5>
			<h5>- GET <code>/person/:id</code> // Search for a person</h5>
			<p>When user hit the Search Button without the input the application will return all date from the database.
			User can also use person ID to search for a person.</p>
			
			<Image className='project-head' alt='personlist' src='../image/projects/PersonAPI/personlist.JPG' thumbnail/>
			<h5><strong>Create</strong></h5>
			<h5>- POST <code>/person</code>  // Create a new person</h5>
			<p>User will be able to create a new person with create button.</p>
			<h5><strong>Edit</strong></h5>
			<h5>- PUT <code>/person/:id</code>  // Edit an exist person</h5>
			<p>User will be able to edit a new person with edit button. A edit modal will pop up for edit person.</p>
			<Image className='project-head' alt='edit' src='../image/projects/PersonAPI/edit.JPG' thumbnail/>
			<h5><strong>Delete</strong></h5>
			<h5>- DELETE <code>/person/:id</code>  // Delete an exist person</h5>
			<p>User will be able to delete a new person with delete button. A delete modal will pop up for confirm delete action.</p>
			<Image className='project-head' alt='delete' src='../image/projects/PersonAPI/delete.JPG' thumbnail/>
		</div>

		<div className='container-fluid'>
			<hr/>
			<h4>STRUCTURE</h4>
			
			<Row>
				<Col sm={6}>
					<strong>Back-End</strong><hr/>
					<ul>
						<li>Server
							<ul>
								<li>NodeJS + ExpressJS</li>
							</ul>
						</li>
						<li>API
							<ul>
								<li>ExpressJS</li>
							</ul>
						</li>
						<li>Datebase
							<ul>
								<li>MongooseJS + MongoDB</li>
							</ul>
						</li>
					</ul>
						
					
				</Col>
				<Col sm={6}>
					<strong>Front-End</strong><hr/>
					<ul>
						<li>React components
							<ul>
								<li>ListsPanel - display the Search Result and person list.</li>
								<li>ControlPanel - display controlPanel, and handing lgoic such as 'connectDB', 'create', and 'search'.</li>
								<li>Header - display API status.</li>
							</ul>
						</li>
						<li>Redux
							<ul>
								<li>reducer.js - handling client side actions</li>
								<li>action_creators.js - create actions</li>
							</ul>
						</li>
						<li>Redux-Thunk and Axios
							<ul>
								<li>Handing HTTP request and handling Asynchronous calls.</li>
							</ul>
						</li>
					</ul>
				</Col>
			</Row>
		</div>

		<div className='container-fluid'>
			<hr/>
			<h4>DECISION</h4>
			<strong>Handling Asynchronous Calls</strong>
			<p>
				In React, there are no standard way for handling HTTP request. So there are many different ways to choose from. 
				I am End up with Redux-Thunk and Axios. I chose Axios becuase it is simple, easy to learn, and use. And Redux-Thunk is 
				most popular npm package for Redux user for handing async calls. 
			</p>
		</div>

		<div className='container-fluid'>
			<hr/>
			<h4>SOURCE</h4>
			<p>Github</p>
			<p>- Repo:  <a href="https://github.com/jienhua/PersonAPI" target="_blank">https://github.com/jienhua/PersonAPI</a></p>
		</div>
	</div>
)

export default PersonAPI