import React from "react";
import "./contact.scss";
import Foooter from "../contact/Foooter";
import { useState } from "react";

const Contact: React.FC = () => {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div>
      <div className="contact" id="contact">
        <div className="left">
          <img src="assets/shake.png" alt=" " className="shake" />
        </div>

        <div className="right">
          <h2>Contact.</h2>

          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
            {message && <span>Thanks, I'll reply ASAP :)</span>}
          </form>
        </div>
      </div>
      <Foooter />
    </div>
  );
};

export default Contact;
