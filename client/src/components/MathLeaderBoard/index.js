import React, { Component } from 'react';
import API from "../../utils/API";
import Table from "react-bootstrap/Table";
import { ScoreTable, Player } from "../PlayerTable";
import { Container } from "../Grid";

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
                <ScoreTable>
                {this.state.players.map(player =>(
                  <Player key={player._id}>
                  <td>{player.rank}</td>
                  <td>{player.username}</td>
                  <td>{player.points}</td>
                  </Player>
                ))}
                </ScoreTable>
            </Table>
          </Container>
        </div>
      );
    }
}

export default MathLeaderBoard;