import React from 'react';

const Header = ({ shopperName }) => (
  <header className="top">
    <h1>Hello {shopperName}</h1>
    <p>Ready to order? Your recommended order are below!</p>
  </header>
);
export default Header;
