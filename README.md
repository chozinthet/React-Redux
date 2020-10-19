React Redux ( Simple React Redux Example )

---> src/index.js 

---> src/App.js



index.js ---> create store + reducer function (state , action)

App.js ---> connect(getStateToProps, getActionToProps)()

*******************************

used Npm package 
- {createStore} from 'redux' ----> to create store
- {Provider} from 'react-redux' ----> container for components
- {connect} from 'react-redux' ---> to connect component to store

********************************

src > index.js

```
import {createStore} from 'redux';
import {Provider} from 'react-redux';

function reducer(data = 0, action){

  switch(action.type){
  
    case "Add":  data = data + 1; break;
    
    case "Reduce":  data = data -1; break;
    
    default : return data;
    
  }
  
  return data;
  
}

const store = createStore(reducer);

ReactDOM.render(

  <React.StrictMode>
  
    <Provider store = {store}>
    
      <App />
      
    </Provider>
    
  </React.StrictMode>,
  
  document.getElementById('root')
  
);
```

********************************

src > App.js

```
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
```

