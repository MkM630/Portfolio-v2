import React from "react";
import workImage from "../Skills/work3.jpg";
import "./Skills.css"; 

const SkillBar = ({ iconClass, skillName, percentage, barColor }) => {
    return (
        <div className="skill-bar">
            <div className="skill-name">
                <i className={`${iconClass} skill-icon`}></i>
                <span>{skillName}</span>
            </div>
            <div className="bar-background">
                <div className="bar-fill" style={{ width: `${percentage}%`, backgroundColor: barColor }}></div>
            </div>
            <span className="percentage">{percentage}%</span>
        </div>
    );
};

export default function Skills() {
    const skills = [
        { iconClass: "bx bxl-html5", skillName: "HTML5", percentage: 95, barColor: "#f97316" },
        { iconClass: "bx bxl-css3", skillName: "CSS3", percentage: 85, barColor: "#2563eb" },
        { iconClass: "bx bxl-javascript", skillName: "JavaScript", percentage: 65, barColor: "#fbbf24" },
        { iconClass: "bx bxl-react", skillName: "React", percentage: 85, barColor: "#06b6d4" },
    ];

    return (
        <section className="skills-section" id="Skills">
            <h2 className="section-title">Skills</h2>
            <div className="skills-container">
                {/* Skills Description */}
                <div>
                    <h2 className="skills-subtitle">Professional Skills</h2>
                    <p className="skills-description">
                        I specialize in front-end development with a strong command of HTML, CSS, JavaScript, and React js.
                        Additionally, I have in-depth expertise in the TailwindCSS framework for creating efficient, responsive designs.
                    </p>
                    {skills.map((skill, index) => (
                        <SkillBar
                            key={index}
                            iconClass={skill.iconClass}
                            skillName={skill.skillName}
                            percentage={skill.percentage}
                            barColor={skill.barColor}
                        />
                    ))}
                </div>
                {/* Image Section */}
                <div className="skills-img-container">
                    <img src={workImage} alt="Skills" className="skills-img" />
                </div>
            </div>
        </section>
    );
}
