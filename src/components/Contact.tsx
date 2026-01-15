"use client";

import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    // Placeholder for form submission logic (e.g., using Formspree, EmailJS, or a server action)
    // Example with fetch to a Formspree endpoint - replace with your actual endpoint
    try {
      const response = await fetch("https://formspree.io/f/your-form-id", {
        // Replace with your Formspree or similar URL
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-12 md:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-8">
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-base text-gray-700 dark:text-gray-300" />
          <h2 className="text-xl font-normal tracking-tight text-gray-900 dark:text-gray-100">
            Contact
          </h2>
        </div>
        <div className="w-48 h-0.5 bg-gradient-to-r from-gray-300/0 via-gray-300 to-gray-300/0 dark:via-gray-600" />

        <div className="space-y-8">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
            {status && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                {status}
              </p>
            )}
          </form>

          {/* Email and Social Links */}
          <div className="flex flex-col items-center space-y-4">
            <a
              href="mailto:koleoshohuzain@gmail.com"
              className="flex items-center space-x-2 text-lg hover:text-blue-600 transition-colors"
            >
              <FaEnvelope />
              <span>koleoshohuzain@gmail.com</span>
            </a>
            <div className="flex space-x-6">
              <a
                href="https://github.com/Uzayn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-gray-600 transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://x.com/kolhuz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-400 transition-colors"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://linkedin.com/in/uzayn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-700 transition-colors"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
