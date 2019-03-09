import React, { Component } from 'react';
import image from './div3.jpg';
import './App.css';
class New extends Component {
    render(){
        return(
            <div className="banner">
               <div className='content-ban'>
                  <img src={image} className='new-img' alt="image"/ >
               </div>
            </div>
        );
    }
}


export default New