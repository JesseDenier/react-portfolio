import React from "react";

import portraitImg from "../assets/img/portrait.png";

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-content-container">
        <h1>About Me</h1>
        <p>Born & raised Austinite trying to keep it weirdly under control.</p>
        <img src={portraitImg} alt="Jesse Denier smiling" />
        <p>
          Having quit all social media, I've decided to create this site to
          share updates about my life with family, old friends, and anyone else
          curious enough to check if I've gone insane.
        </p>
      </div>
    </div>
  );
}
