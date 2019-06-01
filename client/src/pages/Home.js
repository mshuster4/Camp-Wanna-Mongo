import React from 'react';
import GameCarousel from "../components/GameCarousel";
import GameMenu from "../components/GameMenu";
import LeaderBoardContainer from "../components/LeaderBoardContainer";
import Footer from "../components/Footer"

class Home extends React.Component {

  render() {
    return (
      <div class="main-container">
        <GameCarousel></GameCarousel>
        <GameMenu></GameMenu>
        <LeaderBoardContainer></LeaderBoardContainer>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
