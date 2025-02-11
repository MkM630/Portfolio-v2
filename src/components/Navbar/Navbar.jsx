import React, { useState } from "react";
import "./Navbar.css"; // Import the CSS file

export default function Navbar() {
  const [selected, setSelected] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const handleSelect = (item) => {
    setSelected(item);
    setIsMenuOpen(false);
    if (item === "Resume") {
      handleDownload();
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/my_resume.pdf"; 
    link.download = "my_resume.pdf"; 
    link.click();
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        {/* MKM Logo */}
        <div className="navbar-logo"><img src="custom-logo.png" alt="" srcset="" /></div>

        {/* Desktop Menu */}
        <div className="navbar-menu desktop-menu">
          {["Home", "About", "Skills", "Project", "Resume"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`navbar-link ${selected === item ? "active" : ""}`}
              onClick={() => handleSelect(item)}
            >
              {item}
            </a>
          ))}
        </div>
        
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="navbar-hamburger"
        >
          <div className="hamburger-icon">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          {["Home", "About", "Skills", "Project", "Resume"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`navbar-link ${selected === item ? "active" : ""}`}
              onClick={() => handleSelect(item)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
