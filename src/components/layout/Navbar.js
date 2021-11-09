import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <div id='App-navbar'>
        <a
          href='https://github.com/Neveon'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-github fa-1x' />
        </a>

        <a
          href='https://www.freecodecamp.org/nat711'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-free-code-camp fa-1x' />
        </a>

        <a
          href='https://codepen.io/neveon/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-codepen fa-1x' />
        </a>

        <a href='#contact'>
          <i className='far fa-envelope' />
        </a>
      </div>
    );
  }
}
