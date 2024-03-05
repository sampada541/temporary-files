import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>ABOUT</h3>
          <ul>
            <li><Link to="/about" className="footer-link">About Us</Link></li>
            <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
            <li><Link to="#" className="footer-link">Careers</Link></li>
            <li><Link to="#" className="footer-link">SynthGad Stories</Link></li>
            <li><Link to="#" className="footer-link">Press</Link></li>
            <li><Link to="#" className="footer-link">SynthGad Wholesale</Link></li>
            <li><Link to="#" className="footer-link">Corporate Information</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>HELP</h3>
          <ul>
            <li><Link to="#" className="footer-link">Payments</Link></li>
            <li><Link to="#" className="footer-link">Shipping</Link></li>
            <li><Link to="#" className="footer-link">Cancellation & Returns</Link></li>
            <li><Link to="#" className="footer-link">FAQ</Link></li>
            <li><Link to="#" className="footer-link">Report Infringement</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>CONSUMER POLICY</h3>
          <ul>
            <li><Link to="#" className="footer-link">Terms Of Use</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>SOCIAL</h3>
          <ul>
            <li><Link to="#" className="footer-link">Facebook</Link></li>
            <li><Link to="#" className="footer-link">Twitter</Link></li>
            <li><Link to="#" className="footer-link">YouTube</Link></li>
          </ul>
        </div>
      </div>
      <p className="footer-copy">&copy; 2023 SynthGad App. All rights reserved.</p>
    </div>
  );
};

export default Footer;
