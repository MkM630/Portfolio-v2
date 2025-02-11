import React from 'react';
import my_2image from "../About/my-2image.jpg";
import './About.css'; // Import the CSS file

export default function About() {
    return (
        <div id="About" className="about-container">
            <h1 className="about-heading">
                About
            </h1>

            <div className="about-content">
                {/* Image Section (only visible on large screens) */}
                <div className="image-section">
                    <img
                        className="about-image"
                        src={my_2image}
                        alt="Mainak"
                    />
                </div>

                {/* Text Section */}
                <div className="text-section">
                    {/* For Large Screens */}
                    <div className="large-screen-text">
                        <p className="about-paragraph">
                            👋 Hello! I'm <span className="highlight">Mainak</span>, a passionate programmer and web developer. 🚀
                            I excel at solving complex problems using <span className="bold">C, C++,</span> and
                            <span className="bold"> Data Structures & Algorithms</span>. My journey in web development is all about building
                            engaging and user-friendly applications.
                        </p>

                        <p className="about-paragraph">
                            🚀 I value teamwork and continuous improvement. I thrive on collaboration, problem-solving, and contributing to impactful projects.
                            Let's connect, learn together, and create a positive impact in the tech community! 😊
                        </p>

                        <p className="about-paragraph">
                            🌟 I’m always looking forward to new challenges and opportunities to grow. Feel free to reach out—let’s make something amazing together! 💌
                        </p>
                    </div>

                    {/* For Smaller Screens */}
                    <div className="small-screen-text">
                        <p className="about-paragraph">
                            👋 Hi! I'm <span className="highlight">Mainak</span>, a programmer and web developer passionate about solving
                            problems with <span className="bold">C, C++,</span> and <span className="bold">DSA</span>.
                        </p>

                        <p className="about-paragraph">
                            🌐 I’m focused on building dynamic web applications and growing through collaboration. Let’s connect and make a difference! 😊
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
