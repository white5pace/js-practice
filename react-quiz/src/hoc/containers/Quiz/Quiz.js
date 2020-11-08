import React, {Component} from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

class Quiz extends Component {
  state = {
    isFinished: true,
    results: {}, /* {[id] ? 'success : error} */
    activeQuestion: 0,
    answerState: null, /* {[id] ? 'success' : 'error' } */
    quiz: [
      {
        question: 'What color is the sky?',
        rightAnswerId: 3,
        id: 1,
        answers: [
          {text: 'Black', id: 1},
          {text: 'Red', id: 2},
          {text: 'Blue', id: 3},
          {text: 'Green', id: 4}
        ]
      },
      {
        question: 'When was St. Petersburg founded?',
        rightAnswerId: 3,
        id: 2,
        answers: [
          {text: '1700', id: 1},
          {text: '1702', id: 2},
          {text: '1703', id: 3},
          {text: '1803', id: 4}
        ]
      }
    ],

  }

  onAnswerClickHandler = (answerId) => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0]
      if (this.state.answerState[key] === 'success') {
        return
      }
    }

    const question = this.state.quiz[this.state.activeQuestion]
    const results = this.state.results

    if (question.rightAnswerId === answerId) {
      if(!results[answerId]) {
        results[answerId] = 'success'
      }
      this.setState({
        answerState: {[answerId]: 'success'},
        results
      })

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true,
          })
          console.log('Finished')
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }

        window.clearTimeout(timeout)
      }, 1000)

    } else {
      results[answerId] = 'error'
      this.setState({
        answerState: {[answerId]: 'error'},
        results
      })
    }
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Answer all questions</h1>
          {this.state.isFinished ?
            <FinishedQuiz
              results = {this.state.results}
              quiz = {this.state.quiz}
            /> :
            <ActiveQuiz
              answers={this.state.quiz[this.state.activeQuestion].answers}
              question={this.state.quiz[this.state.activeQuestion].question}
              onAnswerClick={this.onAnswerClickHandler}
              quizLength={this.state.quiz.length}
              answerNubmer={this.state.activeQuestion + 1}
              answerState={this.state.answerState}
            />
          }
        </div>
      </div>
    )
  }
}

export default Quiz