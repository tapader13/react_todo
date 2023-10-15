import React, { useState } from 'react';
import style from './Form.module.css';
export default function Form(props) {
  const [info, setInfo] = useState({ title: '', desc: '' });
  let { title, desc } = info;
  let handleInfo = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  let infoSubmit = (e) => {
    e.preventDefault();
    props.onChild(info);
    // console.log(info);
    setInfo({ title: '', desc: '' });
  };
  return (
    <div className={style.container}>
      <form action='' onSubmit={infoSubmit}>
        <div className={style.form}>
          <label htmlFor='title'>title</label>
          <input
            required
            type='text'
            name='title'
            id='title'
            value={title}
            onChange={handleInfo}
          />
        </div>
        <div className={style.form}>
          <label htmlFor='desc'>Discription</label>
          <textarea
            type='text'
            name='desc'
            id='desc'
            required
            onChange={handleInfo}
            value={desc}
          />
        </div>
        <div className={style.form}>
          <button type='submit'>ADD</button>
        </div>
      </form>
    </div>
  );
}
