import React, { Component } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Cart from './Cart'
// import StyledNavbar from './styles/StyledNavbar';

class BootNavbar extends Component {
    render() {

        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <h1>Boomerang Barrier</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                            <Link to="/">HOME</Link>
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            <Cart
                                orderId={this.props.orderId} />
                        </NavItem>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
            // <StyledNavbar>
            //     <Link to="/">HOME</Link>
            //     <h1>Boomerang Barrier</h1>
            // <Cart
            // orderId={this.props.orderId} />
            // </StyledNavbar>
        )
    }
}

export default BootNavbar