import React from 'react';
import GameCarousel from "../components/GameCarousel";
import GameMenu from "../components/GameMenu";
import MathLeaderBoard from "../components/MathLeaderBoard";
import Footer from "../components/Footer"

class Home extends React.Component {

  render() {
    return (
      <div class="main-container">
        <GameCarousel></GameCarousel>
        <GameMenu></GameMenu>
        <MathLeaderBoard></MathLeaderBoard>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
