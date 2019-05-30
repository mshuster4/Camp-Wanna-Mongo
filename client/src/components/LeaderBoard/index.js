import React, { Component } from 'react';
import ZingGrid from 'zinggrid';
import { Container, Row, Col } from "../Grid";
import "./style.css"

class LeaderBoard extends Component {
  // initialize variables
  constructor(props) {
    super(props);
    this.state = {
      overall: [],
    }
  }
  // We are using JSON.stringify because that is the proper way to pass an object to an attribute
  // per the HTML spec. alternatively you can use ZingGrid api to setdata if you do
  // not want a string form of data in the DOM tied to an attribute
  render() {
    return (
      <Row>
        <Col size="sm-12">
          <zing-grid className="leader-board" id="Leaderboard" data={JSON.stringify(this.props.stats)}></zing-grid>
        </Col>
      </Row>
    );
  }
}
export default LeaderBoard;