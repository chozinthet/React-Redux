import React from 'react';
import {connect} from 'react-redux';

function App(props){
  function add(){
    props.add();
  }

  function minus(){
    props.minus();
  }

  return <div>
    <h1>{props.greet}</h1>
    <button type="submit" onClick={add}>Add</button>
    <button type="submit" onClick={minus}>Reduce</button>
  </div>
}


function showState(data){
  return {
    greet: data
  };
}

function changeAction(dispatch){
  return {
    add(){
      dispatch({type: 'Add'})
    },
    minus(){
      dispatch({type: 'Reduce'})
    }
  }
}

const connectToStore = connect(showState, changeAction)(App);

export default connectToStore;


