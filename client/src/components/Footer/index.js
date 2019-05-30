import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./style.css"

function Footer() {
    return (
        <div className="footer">
            <div className="upper-footer">
                <Container>
                    <Row>
                        <Col md={4} sm={12} className="d-md-block d-none">
                            <Row>
                                <Col md={12}>                            
                                    <h6 className="contact-header text-left"><u>Contact Us</u></h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <div className="contact-text text-left">
                                        <i className="fas fa-envelope contact-icon"></i> 123 Ave Dr San Diego, CA 92107
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <div className="contact-text text-left"><i className="fas fa-phone contact-icon"></i> 555-555-5555</div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <div className="contact-text"><i className="fas fa-at contact-icon"></i> team@campwannagetajob.com</div>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={4}>
                            <Row>
                                <Col md={12}>
                                    <h6 className="follow-header text-center"><u>Follow Us</u></h6>
                                    <div className="text-center">
                                        <i className="fab fa-facebook-square fa-2x follow-icon"></i><i className="fab fa-instagram fa-2x follow-icon"></i><i className="fab fa-twitter fa-2x follow-icon"></i>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={4} sm={12} className="d-none d-md-block">
                            <Row>
                                <Col md={12}>
                                    <h6 className="text-right about-header"><u>About Us</u></h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <div className="text-right about-text">Blog <i className="fab fa-blogger-b about-icon"></i></div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <div className="text-right about-text">Github <i class="fab fa-github about-icon"></i></div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <div className="text-right about-text">Our Team <i class="fas fa-user-circle about-icon"></i></div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="lower-footer">
            <Container>
                <Row>
                    <Col sm={12}>
                        <p className="footer-text"><i class="far fa-copyright"></i> 2019</p> 
                    </Col>
                </Row>       
            </Container>
            </div>
        </div>
    );
}



export default Footer;