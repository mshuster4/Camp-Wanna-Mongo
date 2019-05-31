import React, { Component } from 'react';
import AddGame from "../components/AddGame";

class MathGame extends Component {
  render() {
      return (
        <div>
          <AddGame
            challengeRange={[2, 9]}
            challengeSize={6}
            answerSize={4}
            initialSeconds={15}
          />
        </div>
      );
  }

}

export default MathGame;
