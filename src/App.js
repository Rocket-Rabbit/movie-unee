import React from 'react';
import "./App.css";
import {HashRouter, Route} from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';

// https://yts-proxy.now.sh/list_movies.json

function App() {  
  return (
    <HashRouter>
      <Route path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </HashRouter>
    /**
     *  "/about" Path Props, {About} import Component 
     */
  );
}

export default App;