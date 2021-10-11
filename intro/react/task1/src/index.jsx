import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.querySelector('#root');

const List = () => {
  return <h1>Hello React</h1>;
};

ReactDOM.render(<List />, rootElement);
