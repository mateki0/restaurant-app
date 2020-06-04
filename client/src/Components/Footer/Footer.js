import React from 'react';
import './footer.css';

export default function Footer(){
  function handleScroll(){
    window.scrollTo(0,0)
  }
  return(
    <div className="footer-container">
      <div className="footer">
        <div className="company">
          <span>@2014 Company, Inc</span>
          <a href="/contact">Privacy</a>
          <a href="/contact">Terms</a>
        </div>
        <div className="top">
          <span onClick={handleScroll} className="back-top">Back to top</span>
        </div>
      </div>
    </div>
  )
}
