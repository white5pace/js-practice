import React from 'react'
import classes from './FinishedQuiz.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons'

const FinishedQuiz = props => {
  const cls = ['error']
  return (
    <div className={classes.FinishedQuiz}>
      <ul>
      {/*  { props.quiz.map((question, index) => {*/}

      {/*    return (*/}
      {/*      <li*/}
      {/*        key={index}>*/}
      {/*        <strong>{index + 1}</strong>.&nbsp;*/}
      {/*        {question}*/}
      {/*          <i className={cls.join(' ')}><FontAwesomeIcon*/}
      {/*              icon={faCheck}/></i>*/}
      {/*      </li>*/}
      {/*    )*/}

        {/*}) }*/}
        <li>
          <strong>1. </strong>
          How are you?

          <i className={classes.error}><FontAwesomeIcon
              icon={faTimes}/></i>

        </li>
        <li>
          <strong>1. </strong>
          How are you?
          <i className={classes.success}><FontAwesomeIcon
              icon={faCheck}/></i>
        </li>
      </ul>
      <p>Right answers 4 of 10</p>

      <div>
        <button>Again</button>
      </div>

    </div>
  )
}

export default FinishedQuiz