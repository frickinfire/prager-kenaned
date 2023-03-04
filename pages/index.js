import React from 'react';
import logo from 'https://ntvb.tmsimg.com/assets/assets/73227_v9_bb.jpg?w=270&h=360'; // Tell webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}

export default Header;
