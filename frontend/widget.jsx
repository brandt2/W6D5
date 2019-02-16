import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';

const tabInfo = [
  { title: 'one', content: 'I am the first' },
  { title: 'two', content: 'Second pane here' },
  { title: 'three', content: 'Third pane here' }
];

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(
    <div>
      {console.log(tabInfo[0].title)}
      <Clock />
      <br/>
      <Tabs tabInfo={tabInfo} />
    </div>, root);
})