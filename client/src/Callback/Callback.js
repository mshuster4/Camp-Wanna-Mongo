import React, { Component } from 'react';
import NavBar from "../components/NavBar";
import GameCarousel from "../components/GameCarousel";
import GameMenu from "../components/GameMenu";
import LeaderBoardContainer from "../components/LeaderBoardContainer";
import LeaderBoard from "../components/LeaderBoard";

class Callback extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <NavBar
          isAuthenticated={this.props.auth.isAuthenticated}
          login={this.props.auth.login}
          
          logout={this.props.auth.logout}
        ></NavBar>
        <GameCarousel></GameCarousel>
        <GameMenu></GameMenu>
        <LeaderBoardContainer></LeaderBoardContainer>
        <LeaderBoard></LeaderBoard>
      </div>
    );
  }
}

export default Callback;
