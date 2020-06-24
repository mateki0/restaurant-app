import React from "react";
import "./footer.css";

const Footer = () => {
  function handleScroll() {
    window.scrollTo(0, 0);
  }
  return (
    <div data-testid="footer-div" className="footer-container">
      <div className="footer">
        <div className="company">
          <span>@2014 Company, Inc</span>
          <a href="/contact">Privacy</a>
          <a href="/contact">Terms</a>
        </div>
        <div className="top">
          <span data-testid="top" onClick={handleScroll} className="back-top">
            Back to top
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
