import React from "react";
// Bringing in the required import from 'react-router-dom'
import { Link } from "react-router-dom";

import Navbar from "./Navbar";

export default function Header() {
  // The Navbar component will render each of the Link elements in the links prop
  return (
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
  );
}
