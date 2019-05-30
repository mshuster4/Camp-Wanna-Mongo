import React, { Component } from 'react';
import ZingGrid from 'zinggrid';
import { Container, Row, Col } from "../Grid";
import "../LeaderBoard/style.css"

class TriviaLeaderBoard extends Component {

  // initialize variables
  constructor(props) {
    super(props);
    this.state = {
      leader: []
    }
  }

  // initialize data to grid
  componentDidMount() {
    // set state and reflect that change through attribute mutation
    this.setState(() => {
      return {
        "trivia": [
          {
            "username": "user1",
            "points": "10000"
          },
          {
            "username": "user2",
            "points": "10000"
          },
          {
            "username": "user3",
            "points": "10000"
          }
        ]
      }
    });
  }

  // We are using JSON.stringify because that is the proper way to pass an object to an attribute
  // per the HTML spec. alternatively you can use ZingGrid api to setdata if you do
  // not want a string form of data in the DOM tied to an attribute
  render() {
    return (
      <Row>
        <Col size="sm-12">
          <zing-grid id="TriviaLeaderBoard" data={JSON.stringify(this.props.stats)} loading></zing-grid>
        </Col>
      </Row>
    );
  }
}
export default TriviaLeaderBoard;