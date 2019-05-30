import React, { Component } from "react";
import LeaderBoard from "../LeaderBoard";
import MathLeaderBoard from "../MathLeaderBoard";
import MemoryLeaderBoard from "../MemoryLeaderBoard";
import MinesLeaderBoard from "../MinesLeaderBoard";
import TriviaLeaderBoard from "../TriviaLeaderBoard";
import Nav from 'react-bootstrap/Nav'
import { Container } from "../Grid";
import "./style.css"

function LeaderBoardNavTabs(props) {
return (
    <Nav justify variant="tabs" defaultActiveKey="/LeaderBoard">
      <Nav.Item className="leader-nav">
          <Nav.Link
            onClick={() => props.handleComponentChange("LeaderBoard")}
            className={props.currentPage === "LeaderBoard" ? "Nav.Link active" : "Nav.Link"}
          >
            Overall Champions
          </Nav.Link>
      </Nav.Item>
      <Nav.Item className="leader-nav">
          <Nav.Link
            onClick={() => props.handleComponentChange("MemoryLeaderBoard")}
            className={props.currentPage === "MemoryLeaderBoard" ? "Nav.Link active" : "Nav.Link"}
          >
            Memory Champions
          </Nav.Link>
      </Nav.Item>
      <Nav.Item className="leader-nav">
          <Nav.Link
            onClick={() => props.handleComponentChange("MathLeaderBoard")}
            className={props.currentPage === "MathLeaderBoard" ? "Nav.Link active" : "Nav."}
          >
            Digit Champions
          </Nav.Link>
      </Nav.Item>
      <Nav.Item className="leader-nav">
          <Nav.Link
            onClick={() => props.handleComponentChange("MinesLeaderBoard")}
            className={props.currentPage === "MinesLeaderBoard" ? "nav-link active" : "nav-link"}
          >
            Field Champions
          </Nav.Link>
      </Nav.Item>
      <Nav.Item className="leader-nav">
          <Nav.Link
            onClick={() => props.handleComponentChange("TriviaLeaderBoard")}
            className={props.currentPage === "TriviaLeaderBoard" ? "nav-link active" : "nav-link"}
          >
            Quiz Champions
          </Nav.Link>
      </Nav.Item>
    </Nav>
  );

}


class LeaderBoardContainer extends Component {
    state = {
        currentComponent: "LeaderBoard"
    }

    handleComponentChange = component => {
        this.setState({ currentComponent: component })
    };

    renderComponent = () => {
        if (this.state.currentComponent === "LeaderBoard") {
            return <LeaderBoard stats={this.props.stats.leader}/>;
        } else if (this.state.currentComponent === "MathLeaderBoard" ) {
            return <MathLeaderBoard stats={this.props.stats.math}/>
        } else if (this.state.currentComponent === "MemoryLeaderBoard") {
            return <MemoryLeaderBoard stats={this.props.stats.memory}/>
        } else if (this.state.currentComponent === "MinesLeaderBoard") {
            return <MinesLeaderBoard stats={this.props.stats.minesweeper}/>
        } else {
            return <TriviaLeaderBoard stats={this.props.stats.trivia}/>
        }
    };

    render() {
        return (
            <div className="container leaderboard-container">
                <LeaderBoardNavTabs
                    currentComponent={this.state.currentComponent}
                    handleComponentChange={this.handleComponentChange}
                />
                {this.renderComponent()}
            </div>
        );
    }

}
    

export default LeaderBoardContainer;

