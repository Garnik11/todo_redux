import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import  todoReducer  from './todoReducer';
import { Provider } from 'react-redux';

const store = createStore(todoReducer)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    <App />
  </Provider>
  
);


reportWebVitals();
