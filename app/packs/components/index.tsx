import React from 'react';
import ReactDOM from 'react-dom'
import { Welcome } from './welcome';

document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('root');
  ReactDOM.render(<Welcome />, element);
});
