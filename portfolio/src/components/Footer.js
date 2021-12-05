import React from 'react';

function Footer() {
  return (
    <footer className="flex-row px-1"
    style={{
      position: "absolute",
      bottom: "0px",
      textAlign: "center",
      background: "RGB(255, 242, 255)",
      width: "100%",
      height: "75px",
      fontSize: "20px",
      border: "solid 2px black"
    }}
    >
      Thanks for checking out my Portfolio!
    </footer>
  );
}

export default Footer;