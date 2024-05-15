// Imports the required imports from React and 'react-router-dom'
import React from "react";
import { Link } from "react-router-dom";

// Imports the custom files needed below.
import Navbar from "./Navbar";
import personalLogoGreenImg from "/personal_logo_green.svg";

// Sets up the structure of the header and calls the Navbar.jsx file to create the navlist within the header.
export default function Header() {
  return (
    <header class="header">
      <div class="headerContents">
        <div class="logo">
          <img src={personalLogoGreenImg} alt="Personal Logo" />
          <h1 class="logoName">JESSE DENIER</h1>
        </div>
        {/* Renders each of the Link elements in the links prop. */}
        <Navbar
          links={[
            <Link key={1} to="/">
              About Me
            </Link>,
            <Link key={2} to="/code">
              Code
            </Link>,
            <Link key={3} to="/design">
              Design
            </Link>,
            <Link key={4} to="/remodel">
              Remodel
            </Link>,
            <Link key={5} to="/event">
              Events
            </Link>,
            <Link key={6} to="/contact">
              Contact
            </Link>,
            <Link key={7} to="/resume">
              Resume
            </Link>,
          ]}
        />
      </div>
    </header>
  );
}
