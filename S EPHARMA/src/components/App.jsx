import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Navitems from './Navitems ';
import Footer from './Footer';

function App() {
  return (
    <>
      <Navitems/>
       <div className='min-vh-100'>
       <Outlet /> {/* This is where child routes will render */}
       </div>
      <Footer/>
    </>
  );
}

export default App;
