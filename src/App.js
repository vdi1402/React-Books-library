


import './App.css';
import Books from './components/Books/Books';

import Home from './components/homePage/Home';
import Navbar from './components/Navbar/Navbar';

import { useEffect, useState } from 'react';
import Footer from './components/footer/Footer';


const App = () => {




  return (
  <>
  
  <Navbar  />
  <Home />
<Books />
<Footer />

  
  </>
  );
}

export default App
