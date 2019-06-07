import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

//! when i want to place something.
/*
ReactDOM.render( (what i want to use), (where i want to place it));
*/

/*
generates HellowWORLD on the page
ReactDOM.render(<h1>HelloWORLD</h1>, document.getElementById("root"))
*/

//! geterate a list of items
/*
ReactDOM.render(
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>, 
  document.getElementById("root")
)
*/

//! generating a list item in a function
/*
function MyApp() {
  return (
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  )
}

// rendering th function to the DOM
ReactDOM.render (
  <MyApp />,
  document.getElementById("root")
)
*/

/*
default React app link
ReactDOM.render(<App />, document.getElementById('root'));
*/


serviceWorker.unregister();
