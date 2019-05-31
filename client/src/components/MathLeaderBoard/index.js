import React, { Component } from 'react';
import API from "../../utils/API";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "../Grid";

class MathLeaderBoard extends Component {
    state = {
      players: [],
    };

    componentDidMount(){
      this.loadPlayers();
    }

    loadPlayers = () => {
      API.getPlayers()
      .then(res =>
        this.setState({ players: res.data })
      )
      .catch(err => console.log(err));
    };

    render() {
      return (
        <div>
          <Container>
            <Table responsive="sm">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Username</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>playerOne</td>
                  <td>1</td>
                </tr>
                <tr>
                {this.state.players.map(player => (
                  <tr>
                    <td>{player.rank}</td>
                    <td>{player.username}</td>
                    <td>{player.points}</td>
                ))}
                </tr>
              </tbody>
            </Table>
          </Container>
        </div>
      );
    }
}

export default MathLeaderBoard;