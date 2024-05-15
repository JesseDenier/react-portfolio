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

  // Alerts the user that field is required if left empty.
  // Also alerts the user if email doesn't match the regex.
  const handleBlur = (e) => {
    const { name, value } = e.target;
    const capitalizedFieldName = name.charAt(0).toUpperCase() + name.slice(1);
    if (value.trim() === "") {
      alert(`${capitalizedFieldName} is required`);
    } else if (
      name === "email" &&
      !/^[a-z0-9_\.-]+@[\da-z\.-]+\.[a-z\.]{2,6}$/.test(value.toLowerCase())
    ) {
      alert("Invalid email format");
    }
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
    <div className="contact-page">
      <div className="contact-form-container">
        <h1>Contact Me</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
