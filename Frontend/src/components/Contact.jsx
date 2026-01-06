import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // In a real app you'd send this to a backend. For now just acknowledge.
    alert(`Thanks ${name || "friend"}! Your message was received.`);
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section className="contact container">
      <h1>Contact Us</h1>
      <p>
        If you have questions about submissions or purchases, send us a message.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
          />
        </label>

        <label>
          Email
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="you@example.com"
            required
          />
        </label>

        <label>
          Message
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="How can we help?"
            required
          />
        </label>

        <div style={{ marginTop: 12 }}>
          <button className="buy" type="submit">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}
