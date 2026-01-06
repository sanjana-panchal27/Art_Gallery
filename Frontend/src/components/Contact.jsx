import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setSuccess(`Thanks ${name || "friend"}! Your message was received.`);
    setName("");
    setEmail("");
    setMessage("");
    setTimeout(() => setSuccess(""), 4000);
  }

  return (
    <section className="py-12">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-2xl font-semibold text-gray-900">Contact Us</h1>
        <p className="mt-2 text-gray-600">
          Questions about submissions or purchases? Send us a message and we'll
          reply within 2 business days.
        </p>

        {success && (
          <div className="mt-4 p-3 rounded-md bg-emerald-50 border border-emerald-100 text-emerald-800">
            {success}
          </div>
        )}

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              className="mt-1 block w-full rounded-lg border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="you@example.com"
              required
              className="mt-1 block w-full rounded-lg border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="How can we help?"
              required
              className="mt-1 block w-full rounded-lg border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 min-h-[120px]"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              We respect your privacy. No spam.
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
