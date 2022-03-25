import React from 'react'
import './footer.css';

import gpt3Logo from '../../assets/logo.svg';
const Footer = () => {
  return (
    <div className='gpt__footer section__padding'>
      <div className="gpt__footer-heading">
        <h1 className="gradient__text">Do you wnat to step in to future before others</h1>
      </div>
      <div className="gpt__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt__footer-links">
        <div className="gpt__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>All Rights Reserved.</p>
        </div>
        <div className="gpt__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt__footer-links_div">
          <h4>Company</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          
        </div>
        <div className="gpt__footer-links_div">
          <h4>Get in Touch</h4>
          <p>Address</p>
          <p>784 512 369</p>
          <p>dummy@xyz.com</p>
          
        </div>
      </div>
      <div className="gpt__footer-copyright">
        <p>2022 Dummy. All right Reserved</p>
      </div>
    </div>
  )
}

export default Footer