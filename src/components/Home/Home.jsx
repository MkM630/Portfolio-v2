import React from "react";
import exampleImage from "../Home/my_image.jpg"; // Adjusted the path
import "./Home.css"; // Import the CSS file

export default function Home() {
  return (
    <div id="Home" className="home-container">
      {/* Text Section */}
      <div className="home-text">
        <h1 className="home-heading">
          Hi, <br />
          I'm<span className="highlight"> Mainak,</span>
          <br />
          Web Designer
        </h1>
        <a
          href="mailto:mainakmaitra22@gmail.com"
          className="contact-button"
        >
          Contact
        </a>

        <div className="social-links">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mainakmaitra/"
            className="linkedin-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/MkM630"
            className="github-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/mm3076/"
            className="leetcode-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
              alt="LeetCode"
              className="social-icon"
            />
          </a>

          {/* Codeforces */}
          <a
            href="https://codeforces.com/profile/M630M"
            className="codeforces-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3LVEIg_6x2wqlPG8pruOUnUi-wEvnw1eC0w&s"
              alt="Codeforces"
              className="social-icon"
            />
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="home-image">
        <img
          src={exampleImage}
          alt="Mainak"
          className="profile-image"
        />
      </div>
    </div>
  );
}
