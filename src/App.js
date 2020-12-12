import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

// importing email.js
import{ init } from 'emailjs-com';
init("user_5PifaWCGrPQuL7ghKo7R5");

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
