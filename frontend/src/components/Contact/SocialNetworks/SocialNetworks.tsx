import React from "react";

export const SocialNetworks = () => {
  return (
    <div id="contact__social-networks">
      <a
        href="https://www.facebook.com/gustavo.velazquez.moctezuma"
        target="_blank"
        className="contact-button"
      >
        <i className="fab fa-facebook-square"></i>
        Facebook
      </a>
      <a href="https://twitter.com/gustavoo0197" target="_blank" className="contact-button">
        <i className="fab fa-twitter"></i>
        Twitter
      </a>
      <a href="https://github.com/gustavo0197" target="_blank" className="contact-button">
        <i className="fab fa-github"></i>
        Github
      </a>
      <a href="mailto:gustavo.velazquezm@outlook.com" target="_blank" className="contact-button">
        <i className="fas fa-envelope"></i>
        Email
      </a>
      <a href="tel:555-555-5555" target="_blank" className="contact-button">
        <i className="fas fa-phone"></i>
        Call me
      </a>
    </div>
  );
};
