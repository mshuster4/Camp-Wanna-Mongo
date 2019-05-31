import React, { Component } from 'react';
import NavBar from "../components/NavBar";
import GameCarousel from "../components/GameCarousel";
import GameMenu from "../components/GameMenu";
import MathLeaderBoard from "../components/MathLeaderBoard";

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
        <MathLeaderBoard></MathLeaderBoard>
      </div>
    );
  }
}

export default Callback;
