import React, { Component } from "react";
import OverallLeaderBoard from "../OverallLeaderBoard";
import MathLeaderBoard from "../MathLeaderBoard";
import MemoryLeaderBoard from "../MemoryLeaderBoard";
import MinesLeaderBoard from "../MinesLeaderBoard";
import TriviaLeaderBoard from "../TriviaLeaderBoard";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import "./style.css"


class LeaderBoardContainer extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            key: 'math',
        };
    }
    
    render() {
        return (
            <div className="container leaderboard-container">
                <Tabs 
                    id="controlled"
                    justify variant="tabs"
                    activeKey={this.state.key}
                    onSelect={key => this.setState({ key })}
                >
                    <Tab eventKey="overall" title="Overall Champions">
                        <OverallLeaderBoard/>
                    </Tab>
                    <Tab eventKey="memory" title="Memory Champions">
                        <MemoryLeaderBoard/>
                    </Tab>
                    <Tab eventKey="math" title="Digit Champions">
                        <MathLeaderBoard/>
                    </Tab>                   
                    <Tab eventKey="mines" title="Mines Champions">
                        <MinesLeaderBoard/>
                    </Tab>
                    <Tab eventKey="trivia" title="Trivia Champions">
                        <TriviaLeaderBoard/>
                    </Tab>
                </Tabs>
            </div>

        );

    }
}

export default LeaderBoardContainer;