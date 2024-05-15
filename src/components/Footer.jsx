import React from "react";

import githubImg from "../assets/img/logo_github.png";
import linkedinImg from "../assets/img/logo_linkedin.png";
import personalLogoImg from "/personal_logo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerContents">
        <a href="https://github.com/JesseDenier" target="_blank">
          <img src={githubImg} alt="GitHub Logo" />
        </a>
        <a href="https://www.linkedin.com/in/jesse-denier/" target="_blank">
          <img src={linkedinImg} alt="LinkedIn Logo" />
        </a>
        <a href="https://www.jessedenier.com/" target="_blank">
          <img src={personalLogoImg} alt="Personal Logo" />
        </a>
      </div>
    </footer>
  );
}
