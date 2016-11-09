import React, {Component} from 'react'
import {Image,Row, Col} from 'react-bootstrap'

const ooxx = (
	<div>
		<div className='container-fluid'>
			<Image className='project-head' src='../image/projects/ooxx/home.JPG' thumbnail/>
			<br/>
			<div className='skill-bar'>
				<spam className='skill'>#ReactJS</spam> 
				<spam className='skill'>#Redux</spam>
				<spam className='skill'>#Socket.io</spam>
				<spam className='skill'>#NodeJS</spam> 
				<spam className='skill'>#Webpack</spam>
			</div>
		</div>

		<div className='container-fluid'>
			<hr />
			<h4>ABOUT</h4>
			<Row>
				<Col sm={8}>
					<p>OOXX / 圈圈叉叉(Quān quān chā chā) is Taiwanese way for saying Tic Tac Toe. So, yes... This is a Tac Tac Toe Application, but a <strong>Full-Stack</strong> ReactJS Application with Redux and Socket.IO for handling Data Transfer.
						It allows maximum two player play against each other on their own computer.
					</p>
				</Col>
				<Col sm={4}>
					<Image className='project-head' alt='board' src='../image/projects/ooxx/board.JPG' thumbnail/>
				</Col>
			</Row>
		</div>

		<div className='container-fluid'>
			<hr/>
			<h4>PURPOSE</h4>
			<p>
				The purpose for this project is to helping myself get more familiar with Redux.
			</p>
		</div>

		<div className='container-fluid'>
			<hr/>
			<h4>FUNCTIONS</h4>

			<Row>
				<Col sm={4} smPush={8}>
					<Image className='project-head' alt='fpic1' src='../image/projects/ooxx/fpic1.JPG' thumbnail/>
				</Col>
				<Col sm={8} smPull={4}>
					<h5><strong>Playing board</strong></h5>
					<p>- Player is able to make a move by left click of their mouse on the board.</p>
					<p>- Indicated moveable icon will appear, when mouse hover over on the board.</p>
					<p>- If it is not player's turn. He/She will not able to make a move on the board</p>
				</Col>
			</Row>
			<Row>
				<Col sm={4}>
					<Image className='project-head' alt='fpic1' src='../image/projects/ooxx/fpic2.JPG' thumbnail/>
				</Col>
				<Col sm={8}>
					<h5><strong>Control Panel</strong></h5>
					<p>- Player is able to choose to play as O by click "O button".</p>
					<p>- Player is able to choose to play as X by click "X button".</p>
					<p>- To Start the game by click the "Start Button". The Server will random select either player O or player X goes first.</p>
					<p>- Reset or start a new game by click the "Reset button".</p>
					<p></p>
				</Col>
			</Row>

			<Row>
				<Col sm={4} smPush={8}>
					<Image className='project-head' alt='fpic1' src='../image/projects/ooxx/fpic4.JPG' thumbnail/>
				</Col>
				<Col sm={8} smPull={4}>
					<h5><strong>Message Board</strong></h5>
					<p>- It will display current turn ("X" or "O").</p>
					<p>- It will display the piece that player selected.</p>
					<p>- Show the Winner message, when game is end.</p>
				</Col>
			</Row>
		</div>

		<div className='container-fluid'>
			<hr/>
			<h4>STRUCTURE</h4>
			<p>
				The structure for this app is from this <a href='https://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html'>tutorial</a>.
				I am using and modifying his structure to build my ooxx application.
			</p><br/>
			<Row>
				<Col sm={6}>
					<strong>Back-End</strong><hr/>
					<ul>
					<li>Server -
					Socket.io is listening for the connection. It will sending receive's action to the server side Redux reducer.
					Then emit the state to back to all connected socket.</li>
					<li>Reducer - Reducer is handing the actions.</li>
					<li>Store - Store is storing current state.</li>
					<li>Core - It contains core logic for server side, such as 'checkWin' or 'addMove'.</li>
					</ul>
						
					
				</Col>
				<Col sm={6}>
					<strong>Front-End</strong><hr/>
					<ul>
						<li>React components
							<ul>
								<li>board - display the playing board, and handing logic such as place a piece.</li>
								<li>controlPanel - display controlPanel, and handing lgoic such as 'choosePiece', 'start', and 'reset'.</li>
								<li>messageBoard - display message board, and show message such as who's turn and winning message.</li>
							</ul>
						</li>
						<li>Redux
							<ul>
								<li>reducer.js - handling client side actions</li>
								<li>remote_action_middleware.js - emit action to the server side socket</li>
								<li>action_creators.js - create actions</li>
							</ul>
						</li>
						<li>Socket.io-client - sending actions to the server and receiving the state from the update or current server.</li>
					</ul>
				</Col>
			</Row>
		</div>

		<div className='container-fluid'>
			<hr/>
			<h4>CHALLENGE</h4>
			<strong>Stateless component and Immutable data type</strong>
			<p>
				I want to follow the best stander for coding. I decided to make all my React components stateless and all my data immutable.
				Stateless component is not too bad, because it works well with Redux structure. As for immutable data type, I am using <code>ImmutableJS</code>.
				Immutable has its own functions for handing immutable data, such as <code>get()</code>. It has giving me some trouble when I was working with it. 
			</p>
			<strong>Redux structurer</strong>
			<p>
				I am still not very familiar with Redux; thing like "middleware" and "connect". So throughout the project, there are a lot of things for me to search and debug.
				Another challenge is to design a good store structure for redux. I think it is one of the hardest parts, because bad design makes it harder to scale and modify. 
			</p>
		</div>

		<div className='container-fluid'>
			<hr/>
			<h4>IMPROVE</h4>
			<ul>
				<li>Better design for the Redux store.</li>
				<li>Better variable name and action name</li>
			</ul>
		</div>

		<div className='container-fluid'>
			<hr/>
			<h4>SOURCE</h4>
			<p>Github</p>
			<p>- Server:  <a href="https://github.com/jienhua/ooxx-server" target="_blank">https://github.com/jienhua/ooxx-server</a></p>
			<p>- Client:  <a href="https://github.com/jienhua/ooxx-client" target="_blank">https://github.com/jienhua/ooxx-client</a></p>
		</div>

	</div>
)

export default ooxx