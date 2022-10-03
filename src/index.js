import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

/**const e= React.createElement
function App(){
  return{ 
    React.createElement('h1', {id: 'title'}, 'Ola React'),
  };

}
*/

root.render(
    <App />
);
