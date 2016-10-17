import React, {Component} from 'react'
import {Link} from 'react-router'
import { Nav, Navbar, NavbarBrand, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

require('./Navbar.css')

const navbar = (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a>Test</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav pullRight>
    	<LinkContainer to='/about'>
    		<NavItem eventKey={1}>ABOUT</NavItem>
    	</LinkContainer>
    	<LinkContainer to='/experience'>
    		<NavItem eventKey={2}>EXPERIENCE</NavItem>
    	</LinkContainer>
    	<LinkContainer to='/portfolio'>
    		<NavItem eventKey={3}>PORTFOLIO</NavItem>
    	</LinkContainer>
    </Nav>
  </Navbar>
)


class myNavbar extends Component {
	render() {
		return navbar
	}
}

export default myNavbar