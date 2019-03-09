import React, { Component } from 'react';
import menu from './Contact-Us-1.png';
import ctc from './new-menu.png';
import cte from './menu.png';
import logo from './logo.svg';
import './App.css';

class NavBar extends Component {
  render() {
    return (
      <div className="App">
        <div className="c-1">
          <div className='m1'>
            <img src={menu} className='menu'/>
          </div>
        <div className='m1'>
          <img src={ctc} className='menu'/>
        </div>
        <div className='m1'>
        <img src={cte} className='menu'/>
      </div> 
        </div>
        <div className="c-2">
          <img src={logo} className='app-logo' alt="image"/ >
        </div>
        </div>
      
      );
  }
}
export default NavBar;