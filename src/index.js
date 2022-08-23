import './index.css';
import chalk from 'chalk';
import randomColor from 'randomcolor';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Math.floor(Math.random()*16777215).toString(16);
// const color = '#' + Math.floor(Math.random()*16777215).toString(16);
const color = randomColor();
// ({
//   luminosity: 'light',
//   hue: 'blue',
// });
console.log(chalk.hex(color).bold('##########################'));
console.log(chalk.hex(color).bold('##########################'));
console.log(chalk.hex(color).bold('##########################'));
console.log(chalk.hex(color).bold(`######   ${color}    #####`));
console.log(chalk.hex(color).bold('##########################'));
console.log(chalk.hex(color).bold('##########################'));
console.log(chalk.hex(color).bold('##########################'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
