import React, { Component } from "react";
import MathLeaderBoard from "../MathLeaderBoard";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Container } from '../Grid';
import "./style.css"
import OverallLeaderBoard from "../OverallLeaderBoard";

class LeaderBoardContainer extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            key: 'overall',
        };
    }
    
    render() {
        return (
            <Container>
                <Tabs 
                    id="controlled"
                    activeKey={this.state.key}
                    onSelect={key => this.setState({ key })}
                >
                    <Tab eventKey="overall" title="Overall Champions">
                        <OverallLeaderBoard/>
                    </Tab>
                    <Tab eventKey="math" title="Digit Champions">
                        <MathLeaderBoard/>
                    </Tab>
                </Tabs>
            </Container>

        );

    }
}

export default LeaderBoardContainer;