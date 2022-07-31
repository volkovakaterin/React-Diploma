import React from 'react';
import {Routes, Route} from'react-router-dom';
import './index';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Catalog from './components/Catalog';
import About from './components/About';
import Contacts from './components/Contacts';

function App() {
  return (
    <>
    <Header/>    
    <Routes>     
      <Route path="/" element={<Main/>} />
      <Route path="/catalog.html" element={<Catalog/>} />
      <Route path="/about.html" element={<About/>} />
      <Route path="/contacts.html" element={<Contacts/>} />  
    </Routes>
    <Footer/>
    </> 
   
  );
}

export default App;
