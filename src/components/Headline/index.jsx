import classes from 'src/components/Headline/Headline.module.css';
// import React from 'react';

export const Headline = (props) => {
  return (
    <div>
      <h1 className={classes.title}>
        {props.page} Page
      </h1>

      <p className={classes.description}>
        アイテムの数は{props.children}こです。
      </p>

      <button onClick={props.handleReduce}>減らす</button>
    </div>
  );
}
