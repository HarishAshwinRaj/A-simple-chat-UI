import React from 'react';
import logo from '../orangelogo.svg';
import Navlink from './Navlink';

const Header=()=>{
  return (
    <header className="Orange-header">
      <img src={logo} alt=" Logo" className ="orange-logo" />
      <Navlink/>
    </header>
  )
}

export default Header;
