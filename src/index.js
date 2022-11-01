import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {allReducers as reducer} from './reducers'
import { decrement, increment } from './actions';

// Actions
/* const increment = () => {
  return {
    type:"increment"
  }
}
const decrement = () => {
  return {
    type:"decrement"
  }
} */

// Reducer
/* const reducer = combineReducers({
  counter:(count=0, action) => {
    switch(action.type){
      case "increment":
        return count+1
      case "decrement":
        return count-1
      default:
        return count
    }
  },
  something:()=>{
    return "Heloooooo"
  }
}) */

const store = configureStore({reducer});

// Display in console
// store.subscribe(()=>console.log(store.getState()))


// Dispatch

/* store.dispatch(increment())
store.dispatch(increment()) */

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
