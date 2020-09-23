import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function App() {

  const[{ user }, dispatch] = useStateValue();
  // useEffect 
  //Piece of code which runs based on a given condition

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if(authUser) {
        // user is logged in...
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        // user is logged out...
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    });

    return () => {
      unsubscribe();
    }
  }, [])

  console.log('User ' + JSON.stringify(user));

  return (
    <Router>
      <div className="app">
        <switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
        </switch>
      </div>
    </Router>
  );
}

export default App;
