import React from 'react';
import Todo from './Todo';

import style from './Todos.module.css';
export default function Todos(props) {
  //   console.log(props);
  return (
    <>
      <div className={style.container}>
        {props.input.map((todo, i) => {
          {
            /* {
            console.log(todo);
          } */
          }
          return <Todo id={todo.id} onId={props.onId} todo={todo.p} key={i} />;
        })}
      </div>
    </>
  );
}
