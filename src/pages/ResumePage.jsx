import React from "react";

import resumePDF from "../assets/pdf/jesse_denier_resume.pdf";

export default function ResumePage() {
  return (
    <div className="resume-page">
      <div className="resume-content-container">
        <h1>Resume</h1>
        <p>
          Click{" "}
          <a href={resumePDF} download>
            here
          </a>{" "}
          to download my resume for your records.
        </p>
        <div className="skills-section">
          <h2>Technical Skills</h2>
          <ul>
            <li>Adobe InDesign</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Adobe Premiere</li>
            <li>Microsoft Suite</li>
            <li>HTML & CSS</li>
            <li>Javascript</li>
            <li>Node JS</li>
            <li>React</li>
          </ul>
        </div>
        <div className="skills-section">
          <h2>Personal Skills</h2>
          <ul>
            <li>Problem Solving</li>
            <li>Communication</li>
            <li>Organization</li>
            <li>Time Management</li>
            <li>Planning</li>
            <li>Leadership</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
