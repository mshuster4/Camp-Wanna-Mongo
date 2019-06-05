import React, { Component } from 'react';
import GameCarousel from "../components/GameCarousel";
import GameMenu from "../components/GameMenu";
import LeaderBoardContainer from "../components/LeaderBoardContainer";
import Footer from "../components/Footer";

class Callback extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <GameCarousel/>
        <GameMenu/>
        <LeaderBoardContainer/>
        <Footer/>
      </div>
    );
  }
}

export default Callback;
