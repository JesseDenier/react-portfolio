import React from "react";

import resumeImg from "../assets/img/jesse_denier_resume.png";
import resumePDF from "../assets/pdf/jesse_denier_resume.pdf";

export default function AboutPage() {
  return (
    <div>
      <h1>Resume</h1>
      <p>
        Click{" "}
        <a href={resumePDF} download>
          here
        </a>{" "}
        to download my resume for your records.
      </p>
      <h2>Technical Skills</h2>
      <ul>
        <li>Adobe InDesign</li>
        <li>Adobe Photoshop</li>
        <li>Adobe Illustrator</li>
        <li>Adobe Premiere</li>
        <li>Microsoft Suite</li>
        <li>HMTL & CSS</li>
        <li>Javascript</li>
        <li>Node JS</li>
        <li>React</li>
      </ul>
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
  );
}
