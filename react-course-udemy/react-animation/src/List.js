import React from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";

const List = ({items, onRemove}) => {
  return (
    <TransitionGroup component={'ul'}>
      {items.map(item => (
        <CSSTransition
          classNames={'os'}
          timeout={300}
          key={item.id}
        >
          <li
            onClick={() => onRemove(item.id)}
            style={{cursor: 'pointer'}}
          >{item.title}</li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default List;