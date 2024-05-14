import React, { useState } from "react";

export default function ContactPage() {
  // Defines state variables for form data using the useState hook, and sets them to initially empty.
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Updates form data when input values change.
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Updates the corresponding form field in the state.
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handles form submission.
  const handleSubmit = (e) => {
    // Prevents the default form submission behavior
    e.preventDefault();
    // Constructs an email using form data.
    const mailtoLink =
      "mailto:jessecdenier@gmail.com?subject=Contact Form Submission&body=Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}";
    // Opens the default email client with the constructed email.
    window.location.href = mailtoLink;
    // Clears the form after submission.
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        {/* Name input field */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        {/* eMail input field */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        {/* Message input field */}
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        {/* Submite button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
