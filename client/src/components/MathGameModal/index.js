import React from "react";
import Modal from 'react-responsive-modal';
import "./style.css"


class MathGameModal extends React.Component {

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
      <div className="start-modal">
        <Modal 
            modalId="modal"
            open={open} 
            onClose={this.onCloseModal} 
            center={false}
            showCloseIcon={false}
            closeOnOverlayClick={false}

        >
          <h2>Instructions</h2>
          <h5>Try to reach the target number as many times as you can in one minute!</h5>
          <h5><u>How to Play</u></h5>
          <p className="add-info">- Four of the six small numbers below add up to the target number on top</p>
          <p className="add-info">- Click on a number to select it</p>
          <p className="add-info">- Make sure not to click the same number log twice!</p>
          <h5>Good Luck</h5>
          <button className="add-start" onClick={this.handleClick}>Start Game</button>
        </Modal>
      </div>
    );
  }
}

export default MathGameModal;
 