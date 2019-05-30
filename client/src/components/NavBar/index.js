import React, { Component } from 'react';
import "./style.css";
import { Link } from 'react-router-dom'
import { Navbar, Nav, Button } from 'react-bootstrap';
//import auth0 from 'auth0-js';
import Logo from "../HomePageImages/logo.png" 
import { Container, Row, Col } from "../Grid"

class NavBar extends Component {
  render() {
    const { isAuthenticated, login, logout } = this.props;
    return (
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <Row>
            <Col size="sm-12 md-4">
              <Link to="/">
                <Navbar.Brand >
                  <img src={Logo}
                  alt="logo" 
                  className="img-fluid"/>
                </Navbar.Brand>
              </Link>
            </Col>
            <Col size="sm-12 md-8" className="text-center">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" 
            />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Link to="/" className="main-nav nav-link">Home</Link>
                <Nav.Link className="main-nav">Leaderboards</Nav.Link>
                <Nav.Link className="main-nav">Contact Us</Nav.Link>
              {
                !isAuthenticated() && (
                    <Button
                      id="qsLoginBtn"
                      bsStyle="primary"
                      className="log-button btn-margin"
                      onClick={login.bind(this)}
                    >
                      Log In
                    </Button>
                  )
              }
              {
                isAuthenticated() && (
                    <Button
                      id="qsLogoutBtn"
                      bsStyle="primary"
                      className="log-button btn-margin"
                      onClick={logout.bind(this)}
                    >
                      Log Out
                    </Button>
                  )
              }
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Row>
        </Container>
    </Navbar>
        );
      }
  }
    
    export default NavBar;