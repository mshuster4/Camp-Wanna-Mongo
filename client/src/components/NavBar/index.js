import React, { Component } from 'react';
import "./style.css";
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import Logo from "../HomePageImages/logo.png";
import { Container, Row, Col } from "../Grid";
import Auth from "../../Auth/Auth";

const auth = new Auth();

class NavBar extends Component {
  render() {
    const { login, logout } = this.props.auth;
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
                <Nav.Link to="/Profile" className="main-nav">Profile</Nav.Link>
                <Nav.Link to="/Resources" className="main-nav">Resources</Nav.Link>
                <Nav.Link to="/About" className="main-nav">About Us</Nav.Link>
               {
                !auth.isAuthenticated() && (
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
              auth.isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.goTo.bind(this, 'profile')}
                  >
                    Profile
                  </Button>
                )
              }
              {
                auth.isAuthenticated() && (
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