import React, { Component } from 'react';
import API from "../../utils/API";
import Table from "react-bootstrap/Table";
import { ScoreTable, Player } from "../PlayerTable";
import { Container } from "../Grid";

class TriviaLeaderBoard extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {
      players: [],
    };
  }

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
                  <th>Username</th>
                  <th>Points</th>
                </tr>
              </thead>
                <ScoreTable>
                {this.state.players.map(player =>(
                  <Player key={player._id}>
                  <td>{player.username}</td>
                  <td>{player.triviaPoints}</td>
                  </Player>
                ))}
                </ScoreTable>
            </Table>
          </Container>
        </div>
      );
    }
}

export default TriviaLeaderBoard;