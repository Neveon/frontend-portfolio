import React, { Component } from 'react';
import Navbar from './Navbar';
import Aboutme from '../About/AboutMe';
import Cards from '../cards/cards';
import Contact from './Contact';
import Footer from '../Footer/Footer';

export default class Home extends Component {
  render() {
    return (
      <div className='container-fluid p-0 m-0'>
        <Navbar />
        <Aboutme />
        <div id='projects' />
        <div className='row'>
          &nbsp;
          <Cards />
        </div>
        <div className='row' id='contact'>
          <Contact />
        </div>
        <div className='row'>
          <Footer />
        </div>
      </div>
    );
  }
}
