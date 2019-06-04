import React from "react";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Link } from 'react-router-dom'
import {  Row, Col } from "../Grid";
import MathIcon from "../HomePageImages/addition-icon.png";
import MemoryIcon from "../HomePageImages/memory-icon.png";
import TriviaIcon from "../HomePageImages/trivia-icon.png";
import MinesIcon from "../HomePageImages/minesweeper-icon.png";
import htmlIcon from "../HomePageImages/htmlIcon.png";
import cssIcon from "../HomePageImages/cssIcon.png";
import jsIcon from "../HomePageImages/jsIcon.png";
import databaseIcon from "../HomePageImages/databaseIcon.png";
import DigitDash from "../HomePageImages/digit-dash.png";
import Quiz from "../HomePageImages/quiz.png";
import Mines from "../HomePageImages/mines.png"
import Memory from "../HomePageImages/memory.png"
import Card from "react-bootstrap/Card";
import htmlPreview from "../HomePageImages/htmlPreview.png";
import cssPreview from "../HomePageImages/cssPreview.png";
import jsPreview from "../HomePageImages/jsPreview.png";
import dataPreview from "../HomePageImages/dataPreview.png";
import "./style.css"


class GameMenu extends React.Component {
  render() {
  return (
        <div className="container game-menu-container">
            <Row>
                <Col size="sm-12">
                    <Row>
                        <Col size="sm-12 md-3">
                            <div class="skills-container">
                                <Link to="/Memory">
                                    <Flippy
                                        flipOnHover={true}
                                        flipDirection="horizontal"
                                    >
                                        <FrontSide>
                                                <h4 className="text-center">Memory Lane</h4>
                                            <Card.Img src={MemoryIcon} alt="memory"/>
                                            <p>Improve your recall and short-term memory.</p>
                                        </FrontSide>
                                        <BackSide>
                                            <h4 className="text-center">Preview</h4>
                                            <Card.Img src={Memory} alt="memory"/>
                                        </BackSide>
                                    </Flippy>
                                </Link>
                            </div>
                        </Col>
                        <Col size="sm-12 md-3">
                        <Link to="/MathGame">
                             <Flippy
                                flipOnHover={true}
                                flipDirection="horizontal"
                            >
                                <FrontSide>
                                    <h4 className="text-center">Digit Dash</h4>
                                    <Card.Img src={MathIcon} alt="math"/>
                                    <p>Improve your logical thinking skills.</p>
                                </FrontSide>
                                <BackSide>
                                    <h4 className="text-center">Preview</h4>
                                    <Card.Img src={DigitDash} alt="digit"/>
                                </BackSide>
                            </Flippy>
                        </Link>
                        </Col>
                        <Col size="sm-12 md-3">
                        <Link to="/MinesweeperGame">
                             <Flippy
                                flipOnHover={true}
                                flipDirection="horizontal"
                            >
                                <FrontSide>
                                    <h4 className="text-center">Field Navigator</h4>
                                    <Card.Img src={MinesIcon} alt="mines"/>
                                    <p>Improve your problem solving abilities</p>
                                </FrontSide>
                                <BackSide>
                                    <h4 className="text-center">Preview</h4>
                                    <Card.Img src={Mines} alt="mines"/>
                                </BackSide>
                            </Flippy>
                        </Link>
                        </Col>
                        <Col size="sm-12 md-3">
                        <Link to="/Trivia">
                            <Flippy
                                flipOnHover={true}
                                flipDirection="horizontal"
                            >
                                <FrontSide>
                                    <h4 className="text-center">Quiz Bowl</h4>
                                    <Card.Img src={TriviaIcon} alt="trivia"/>
                                    <p>Figure out which career path is right for you.</p>
                                </FrontSide>
                                <BackSide>
                                    <h4 className="text-center">Preview</h4>
                                    <Card.Img src={Quiz} alt="quiz" />
                                </BackSide>
                            </Flippy>
                          </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
             <Row>
                <Col size="sm-12">
                    <Row>
                        <Col size="sm-12 md-3">
                        <Link to="/HtmlHeroes">
                            <Flippy
                                flipOnHover={true}
                                flipDirection="horizontal"
                            >
                                <FrontSide>
                                        <h4 className="text-center">Html Heroes</h4>
                                    <Card.Img src={htmlIcon} alt="htmlIcon"/>
                                    <p>Get familiar with HTML interview questions.</p>
                                </FrontSide>
                                <BackSide>
                                    <h4 className="text-center">Preview</h4>
                                    <Card.Img src={htmlPreview} alt="html"/>
                                </BackSide>
                            </Flippy>
                        </Link>
                        </Col>
                        <Col size="sm-12 md-3">
                        <Link to="/CssCrusaders">
                             <Flippy
                                flipOnHover={true}
                                flipDirection="horizontal"
                            >
                                <FrontSide>
                                    <h4 className="text-center">CSS Crusaders</h4>
                                    <Card.Img src={cssIcon} alt="math"/>
                                    <p>Get familiar with CSS interview questions.</p>
                                </FrontSide>
                                <BackSide>
                                    <h4 className="text-center">Preview</h4>
                                    <Card.Img src={cssPreview} alt="digit"/>
                                </BackSide>
                            </Flippy>
                        </Link>
                        </Col>
                        <Col size="sm-12 md-3">
                        <Link to="/JsJunkies">
                             <Flippy
                                flipOnHover={true}
                                flipDirection="horizontal"
                            >
                                <FrontSide>
                                    <h4 className="text-center">JS Junkies</h4>
                                    <Card.Img src={jsIcon} alt="mines"/>
                                    <p>Get familiar with JavaScript interview questions.</p>
                                </FrontSide>
                                <BackSide>
                                    <h4 className="text-center">Preview</h4>
                                    <Card.Img src={jsPreview} alt="mines"/>
                                </BackSide>
                            </Flippy>
                        </Link>
                        </Col>
                        <Col size="sm-12 md-3">
                        <Link to="/DataDivers">
                            <Flippy
                                flipOnHover={true}
                                flipDirection="horizontal"
                            >
                                <FrontSide>
                                    <h4 className="text-center">Data Divers</h4>
                                    <Card.Img src={databaseIcon} alt="trivia"/>
                                    <p>Get familiar with Database interview questions.</p>
                                </FrontSide>
                                <BackSide>
                                    <h4 className="text-center">Preview</h4>
                                    <Card.Img src={dataPreview} alt="quiz" />
                                </BackSide>
                            </Flippy>
                        </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );

  }

}

export default GameMenu; 