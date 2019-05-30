import React, { Component } from "react"
import { Col } from "../Grid"
import "./style.css";


class Number extends Component {
    
    handleClick = () => {
        if (this.props.clickable) {
            this.props.onClick(this.props.id);
            console.log(this.props.id);
            console.log(this.props.value);
        }
        else {
            console.log("already selected");    
        }
    };

    render() {
    return (
        <Col size="sm-6">
          <div>
            <h1 className="number-header text-center">
                <div
                    className="number"
                    style={{ opacity: this.props.clickable ? 1 : 0.3 }}
                    onClick={this.handleClick}
                >
                    {this.props.value}
                </div>
            </h1>
          </div>
        </Col>
        );
    }
}

export default Number;