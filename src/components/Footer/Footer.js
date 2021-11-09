import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='col footer'>
      <div className='row footer-links justify-content-center'>
        <a
          id='one'
          href='https://github.com/Neveon'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-github fa-1x' />
        </a>

        <a
          id='two'
          href='https://www.freecodecamp.org/nat711'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-free-code-camp fa-1x' />
        </a>

        <a
          id='three'
          href='https://codepen.io/neveon/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-codepen fa-1x' />
        </a>
      </div>
      <div className='row justify-content-center'>
        <footer>
          <small id='footer-name'>Neil Tellez</small>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
