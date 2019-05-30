import React from "react";
import JsQuestions from "./JsQuestions.json"
import Quiz from "react-quiz-component";
import {Container, Row, Col} from "../Grid";
import CodingQuizResultsModal from "../CodingQuizResultsModal";
import "./style.css";

const renderCustomResultPage = (obj) => {
    console.log(obj.numberOfCorrectAnswers);
        return (
        <div>
            <CodingQuizResultsModal
                correct={obj.numberOfCorrectAnswers}
            />
        </div>
        )
}


class JsQuiz extends React.Component {

    render() {
        return (
            <div className="js-quiz-body">
                <Container>
                    <Row>
                        <Col size="sm-2"></Col>
                        <Col size="sm-8">
                            <Quiz quiz={JsQuestions} showDefaultResult={false} customResultPage={renderCustomResultPage}/>
                        </Col>
                        <Col size="sm-2"></Col>
                    </Row>
                </Container>
            </div>
        );
    }

}

export default JsQuiz;