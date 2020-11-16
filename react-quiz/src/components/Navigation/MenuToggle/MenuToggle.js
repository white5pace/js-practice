import React from 'react'
import classes from './MenuToggle.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons'

const MenuToggle = props => {
  const cls = [
    classes.MenuToggle
  ]
  if(props.isOpen) {
    cls.push(classes.open)
  }

  return(
    <i
      className={cls.join(' ')}
      onClick={props.onToggle}
    ><FontAwesomeIcon icon={props.isOpen ? faTimes : faBars}/></i>
  )
}

export default MenuToggle


