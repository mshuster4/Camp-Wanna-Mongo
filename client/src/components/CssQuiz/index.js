import React from "react";
import CssQuestions from "./CssQuestions.json"
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


class CssQuiz extends React.Component {

    render() {
        return (
            <div className="css-quiz-body">
                <Container>
                    <Row>
                        <Col size="sm-2"></Col>
                        <Col size="sm-8">
                            <Quiz quiz={CssQuestions} showDefaultResult={false} customResultPage={renderCustomResultPage}/>
                        </Col>
                        <Col size="sm-2"></Col>
                    </Row>
                </Container>
            </div>
        );
    }

}

export default CssQuiz;