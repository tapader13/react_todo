import React from 'react';
import { FaTrashCan } from 'react-icons/fa6';
import style from './Todo.module.css';
export default function Todo(props) {
  console.log(props);
  const { title, desc } = props.todo;
  const { id } = props;
  //   console.log(id);
  let DeleteHandle = (i) => {
    // console.log(i);
    props.onId(i);
  };
  return (
    <div className={style.main}>
      <div className='container'>
        <h2>{title} </h2>
        <p>{desc} </p>
      </div>
      <div className={style.btn}>
        <FaTrashCan
          onClick={() => {
            DeleteHandle(id);
          }}
        />
        {/* onClick={DeleteHandle} */}
      </div>
    </div>
  );
}
