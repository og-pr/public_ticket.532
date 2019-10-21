import React from 'react';
import './style.css';

// replaces bloatware from fontawesome (saves ~1.5 MB)
import svgTwitter from './img/twitter.svg'; 
import svgFacebook from './img/facebook.svg'; 
import svgGithub from './img/github.svg'; 
import SVG from 'react-inlinesvg';

console.log('o.log > FooterView.js')

// hex colors for icons @ https://simpleicons.org/
const Footer = (props) => (
  <footer>
    <div className="container">
      <ul style={{alignItems:"center", justifyContent:"center"}} className="list-inline list-social">
        <li className="list-social-icon social-twitter"><a href="#" style={{textDecoration: "none"}}> <SVG src={svgTwitter} width='25px' height='25px' fill='white' /> </a></li>
        <li className="list-social-icon social-github"><a href="#" style={{textDecoration: "none"}}> <SVG src={svgGithub} width='25px' height='25px' fill='white' /> </a></li>
        <li className="list-social-icon social-facebook"><a href="#" style={{textDecoration: "none"}}> <SVG src={svgFacebook} width='25px' height='25px' fill='white' /> </a></li>
      </ul>
      <ul className="list-inline">
        <li className="list-inline-item"><a href="#">Privacy</a></li>
        <li className="list-inline-item"><a href="#">Terms</a></li>
        <li className="list-inline-item"><a href="#">FAQ</a></li>
      </ul>
      <ul className="list-inline">
        <li className="list-inline-item">&copy; 2019 New Ventures LLC. All Rights Reserved.</li>
      </ul>
    </div>
  </footer>
///
)

export default Footer