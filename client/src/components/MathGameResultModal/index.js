import React from "react";
import Modal from 'react-responsive-modal';
import "./style.css"
 
class MathGameResultModal extends React.Component {
    
  state = {
    open: true,
  };
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };


  handleClick = () => {
      this.onCloseModal();
      this.props.onClick();
      console.log("clicked!");
  }

 
  render() {
    const { open } = this.state;
    return (
      <div>
        <Modal 
            modalId="resultsModal"
            open={open}
            onClose={this.onCloseModal} 
            center={false}
            showCloseIcon={false}
            closeOnOverlayClick={false}
        >
          <h2>Time's up!</h2>
          <p className="results-text">You scored {this.props.wins} points</p>
          <button className="results-button" onClick={this.handleClick}>Play Again</button>
        </Modal>
      </div>
    );
  }
}

export default MathGameResultModal;
 