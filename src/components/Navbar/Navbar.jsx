import React, {Component} from 'react'
import {Link} from 'react-router'
import { Nav, Navbar, NavbarBrand, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

require('./Navbar.css')

const navbar = (
  <Navbar fixedTop>
    <Navbar.Header>
      <LinkContainer to='/portfolio'>
        <Navbar.Brand>TEST</Navbar.Brand>
      </LinkContainer>
    </Navbar.Header>
    <Nav pullRight>
      <LinkContainer to='/portfolio'>
    		<NavItem eventKey={1}>PORTFOLIO</NavItem>
    	</LinkContainer>
    	<LinkContainer to='/about'>
    		<NavItem eventKey={2}>ABOUT</NavItem>
    	</LinkContainer>
    	<LinkContainer to='/experience'>
    		<NavItem eventKey={3}>EXPERIENCE</NavItem>
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