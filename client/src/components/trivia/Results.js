import React from 'react';

class Result extends React.Component {
  // constructor(props){
  //   super(props);
  // }
  // renderQuestins(){
  //   return  this.props.quizResult.map((_data,index) =>{
  //       return <div className="list-grp">{_data.question} <br/>correct answer is option: {_data.answerindex} :  and you have selcted {this.props.answers[index]+1} { ((this.props.answers[index]+1) === _data.answerindex) ? (<span className="status">its correct !man</span>) : ''}</div>
  //   })
  // }
  render (){
    return (
    <div  className="quiz-story">
      <div>
        <strong>Lets see your results</strong>!
        <div>Great Job! Keep up the hard work and you can achieve your dreams!</div>
      </div>
    </div>
    )
  }
}

export default Result;