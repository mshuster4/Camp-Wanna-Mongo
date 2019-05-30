import React, { Component } from "react";
import { Link } from 'react-router-dom';
import API from "../utils/API";
import Auth from '../utils/Auth';
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

const styles = {
  marginTop: "50px"
}

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      API.login({
        username: this.state.username,
        password: this.state.password,
      })
        .then(res => {
          // set the token then redirect to the "/books" route
          Auth.setToken(res.data.token);
          this.props.history.push(`/books`)
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div style={styles}>
        <Container fluid>
          <Row>
            <Col size="md-6">
              <form>
                <Input
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  name="username"
                  placeholder="Username (required)"
                />
                <Input
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  name="password"
                  type="password"
                  placeholder="Password (required)"
                />
                <FormBtn
                  disabled={!(this.state.username && this.state.password)}
                  onClick={this.handleFormSubmit}
                >
                  Login
                </FormBtn>
              </form>
              <Link to="/">Home</Link>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Login;