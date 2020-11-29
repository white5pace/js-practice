import React, {Component} from 'react';
import classes from './QuizList.module.css'
import {NavLink} from "react-router-dom";
import Loader from "../../components/UI/Loader/Loader";
import axios from "../../axios/axios-quiz"

class QuizList extends Component {
  state = {
    quizzes: [],
    loading: true,
  }

  renderQuizzes() {
    return this.state.quizzes.map((quiz) => {
      return (
        <li
          key={quiz.id}
        >
          <NavLink to={'/quiz/' + quiz.id}>
            {quiz.name}
          </NavLink>
        </li>
      )
    });
  }

  async componentDidMount() {
    try {
      const response = await axios.get('/quizes.json')

      const quizzes = []

      Object.keys(response.data).forEach((key, index) => {
        quizzes.push({
          id: key,
          name: `Test №${index + 1}`
        })
      })

      this.setState({
        quizzes,
        loading: false,
      });
    }catch (e) {
      console.log(e)
    }

  }
  render() {
    return (
      <div className={classes.QuizList}>
        <div>
          <h1>Quiz List</h1>

          {
            this.state.loading
              ? <Loader/>
              : <ul>
                  {this.renderQuizzes()}
                </ul>
          }

        </div>
      </div>
    );
  }
}

export default QuizList;