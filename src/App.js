import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { add, decrement, increment, reset } from './actions';

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state=> state.logged)
  const dispatch = useDispatch()
  dispatch(add({name:"sagar", email:"sagar@gmail.com", phone:"1231231232"}))
  
  return (
    <div className="App">
      

      <h1>Counter {counter}</h1>
      
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(reset())}>RESET</button>

      {
        isLogged?<h3>Sensitive Information</h3>:""
      }
    </div>
  );
}

export default App;
