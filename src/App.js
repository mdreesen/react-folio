import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

// Importing browser router to render the pages easier
import { Route, Link} from 'react-router-dom';

// Components list
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'

function App() {

  return (
    <div>
        <Nav></Nav>
    <div className="App">
      <Route exact path='/' component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
    </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
