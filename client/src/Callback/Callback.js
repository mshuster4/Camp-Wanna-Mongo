import React, { Component } from 'react';
//import NavBar from "../components/NavBar";
import GameCarousel from "../components/GameCarousel";
import GameMenu from "../components/GameMenu";
import LeaderBoardContainer from "../components/LeaderBoardContainer";

class Callback extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <GameCarousel/>
        <GameMenu/>
        <LeaderBoardContainer/>
      </div>
    );
  }
}

export default Callback;
