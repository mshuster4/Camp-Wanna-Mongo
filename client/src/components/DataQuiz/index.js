import React from "react";
import DataQuestions from "./DataQuestions.json"
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


class DataQuiz extends React.Component {

    render() {
        return (
            <div className="data-quiz-body">
                <Container className="quiz-container">
                    <Row>
                        <Col size="sm-2"></Col>
                        <Col size="sm-8">
                            <Quiz quiz={DataQuestions} showDefaultResult={false} customResultPage={renderCustomResultPage}/>
                        </Col>
                        <Col size="sm-2"></Col>
                    </Row>
                </Container>
            </div>
        );
    }

}

export default DataQuiz;