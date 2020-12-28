import React from 'react'
import classes from './FinishedQuiz.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons'
import Button from "../UI/Button/Button";
import {Link} from 'react-router-dom'

const FinishedQuiz = props => {
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if(props.results[key] === 'success') {
      total++
    }

    return total
  }, 0)

  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        { props.quiz.map((quizItem, index) => {
          const cls = [classes[props.results[quizItem.id]]];

          return (
            <li
              key={index}
            >
              <strong>{index + 1}</strong>.&nbsp;
              {quizItem.question}
              <i className={cls.join(' ')}><FontAwesomeIcon
                icon={props.results[quizItem.id] === 'error' ? faTimes : faCheck}/></i>
            </li>
          )
        })}
      </ul>
      <p>Right answers {successCount} of {props.quiz.length}</p>

      <div>
        <Button onClick={props.onRetry} type={'primary'}>Retry</Button>
        <Link to="/">
          <Button type={'success'}>To list of tests</Button>
        </Link>
      </div>
    </div>
  )
}

export default FinishedQuiz