import React from "react";
import Modal from 'react-responsive-modal';
import { Link } from 'react-router-dom'
import "./style.css"
 
class CodingQuizResultsModal extends React.Component {
    
  state = {
    open: true,
  };
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };


 
  render() {
    const { open } = this.state;

    if (this.props.correct < 10) {
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
                <p className="results-text">You scored {this.props.correct}</p>
               <Link to="/"><button className="home-button">Return to Camp</button></Link>
            </Modal>
            </div>
        );
    }
    
    else {
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
                <p className="results-text">You scored {this.props.correct}.  This is the highest score possible. Nice job!</p>
                <Link to="/"><button className="home-button">Return to Camp</button></Link>
            </Modal>
            </div>
            
        );
    }
  }
}

export default CodingQuizResultsModal;