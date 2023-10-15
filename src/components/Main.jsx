import React, { useState } from 'react';
import Todos from './Todos';
import Form from './Form';
import style from './Main.module.css';
import { v4 as uuidv4 } from 'uuid';
export default function Main() {
  const [form, setForm] = useState([]);
  let handleChild = (p) => {
    // console.log(p);
    setForm([...form, { id: uuidv4(), p }]);
  };
  let handleId = (i) => {
    console.log(i);
    let changeInfo = form.filter((infor) => infor.id !== i);
    setForm(changeInfo);
    console.log(form);
  };
  return (
    <>
      <div className={style.container}>
        <h1>Todo App Using React</h1>
        <Form onChild={handleChild} />
        <Todos input={form} onId={handleId} />
      </div>
    </>
  );
}
