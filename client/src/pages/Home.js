import React from 'react';
import GameCarousel from "../components/GameCarousel";
import GameMenu from "../components/GameMenu";
import LeaderBoardContainer from "../components/LeaderBoardContainer";
import Footer from "../components/Footer"
import axios from 'axios';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      leader: [],
      memory: [],
      math: [],
      trivia: [],
      minesweeper: []
    };
  }

  componentDidMount() {
    axios.get('/api/champions')
    .then((res) => {
      console.log(res);
      this.setState({...this.state, ...res.data});
    })
  }
  
  render() {
    return (
      <div class="main-container">
        <GameCarousel></GameCarousel>
        <GameMenu></GameMenu>
        <LeaderBoardContainer stats={this.state}></LeaderBoardContainer>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
