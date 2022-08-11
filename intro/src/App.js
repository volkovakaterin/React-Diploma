import React , {useEffect, useState} from 'react';
import {Routes, Route} from'react-router-dom';
import './index';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Catalog from './components/Catalog';
import About from './components/About';
import Contacts from './components/Contacts';
import ProductCard from './components/ProductCard';
import { useSelector} from 'react-redux';

function App() {
  const productCard = useSelector(state => state.card);
  const [idCard, setId] = useState (productCard.id)
  console.log(productCard.id);

  useEffect(() => {
    setId(productCard.id)
  }, [productCard.id])

  return (
    <>
    <Header/>    
    <Routes>     
      <Route path="/" element={<Main/>} />
      <Route path="/catalog.html" element={<Catalog/>} />
      <Route path="/about.html" element={<About/>} />
      <Route path="/contacts.html" element={<Contacts/>} />  
      <Route path={`/catalog/:${idCard}.html`} element={<ProductCard/>}/>
    </Routes>
    <Footer/>
    </> 
   
  );
}

export default App;
