import React from 'react';
import Navbar from '../components/Navbar';

const BasePage = function({children}){
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default BasePage;