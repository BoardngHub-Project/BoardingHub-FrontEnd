import React from "react";

import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import '../CSS/Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon /> <FacebookIcon /> <LinkedInIcon />
      </div>
      <p> &copy; 2023 BoardingHub All rights reserved.</p>
    </div>
  );
}

export default Footer;