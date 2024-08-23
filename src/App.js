
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer'
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact'
import Resume from './components/Resume'
import Skills from './components/Skills';


function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path='/' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/skills' element={<Skills/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
