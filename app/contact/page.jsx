"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { useRef } from "react";

export default function Contact() {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    emailjs.send(serviceID, templateID, formData, userID).then(
      () => {
        toast.success("✅ Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      },
      (error) => {
        toast.error("❌ Failed to send the message. Please try again.");
        console.error("EmailJS error:", error.text);
      }
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-4">Contact Stork Linkers</h1>
      <p className="mb-6 text-gray-700">
        Hi, I’m <strong>Sharoon Sarfraz</strong>. Reach out anytime — available
        24/7!
      </p>

      {/* Contact Info */}
      <div className="mb-8 space-y-2">
        <p>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:sharoon.202105203@gcuf.edu.pk"
            className="text-blue-600 hover:underline"
          >
            sharoon.202105203@gcuf.edu.pk
          </a>
        </p>
        <p>
          <strong>Phone:</strong>{" "}
          <a href="tel:+923066079142" className="text-blue-600 hover:underline">
            0306 6079142
          </a>
        </p>
        <p>
          <strong>Support Email:</strong>{" "}
          <a
            href="mailto:sharoon.202105203@gcuf.edu.pk"
            className="text-blue-600 hover:underline"
          >
            sharoon.202105203@gcuf.edu.pk
          </a>
        </p>
      </div>

      {/* Contact Form */}
      <form ref={formRef} onSubmit={handleSubmit} className="mb-10 space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full p-3 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
        />
      </form>

      {/* Google Map */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.827914930034!2d74.35874731517229!3d31.520369981457842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904d91ee05bc3%3A0xc3ae7c63cfe6612d!2sLahore%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1683246919332!5m2!1sen!2sus"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            className="rounded"
          ></iframe>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
        <div className="flex space-x-2 sm:space-x-6 text-blue-600">
          <a href="#" aria-label="Facebook" className="hover:underline">
            Facebook
          </a>
          <a href="#" aria-label="Instagram" className="hover:underline">
            Instagram
          </a>
          <a href="#" aria-label="Twitter" className="hover:underline">
            Twitter
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:underline">
            LinkedIn
          </a>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mb-10 text-center">
        <button
          onClick={() => formRef.current.scrollIntoView({ behavior: "smooth" })}
          className="bg-green-600 text-white px-8 py-3 rounded text-lg hover:bg-green-700 transition"
        >
          Get a Free Quote
        </button>
      </div>

      {/* FAQ Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>
        <details className="mb-2 border rounded p-3">
          <summary className="cursor-pointer font-medium">
            How soon can I expect a response?
          </summary>
          <p className="mt-2">We usually reply within 24 hours.</p>
        </details>
        <details className="mb-2 border rounded p-3">
          <summary className="cursor-pointer font-medium">
            Do you offer custom solutions?
          </summary>
          <p className="mt-2">Yes, we tailor our services to your needs.</p>
        </details>
        <details className="mb-2 border rounded p-3">
          <summary className="cursor-pointer font-medium">
            What payment methods do you accept?
          </summary>
          <p className="mt-2">
            We accept all major credit cards and bank transfers.
          </p>
        </details>
      </div>

      {/* Live Chat (WhatsApp) */}
      <div className="fixed bottom-6 right-6">
        <a
          href="https://wa.me/923066079142"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center space-x-2"
          aria-label="Chat on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.52 3.48a11.72 11.72 0 00-16.56 0 11.72 11.72 0 00-3.32 8.24c0 2.3.6 4.47 1.75 6.38L2 22l4.05-1.32a11.6 11.6 0 006.1 1.6 11.72 11.72 0 008.24-3.32 11.72 11.72 0 000-16.48zM12 20a8 8 0 01-4.16-1.12l-.3-.18-2.4.78.82-2.34-.19-.31A7.98 7.98 0 014 12a8 8 0 1114.2 5.66A7.9 7.9 0 0112 20z" />
            <path d="M17.38 14.26c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12s-.62.78-.76.94c-.14.16-.28.18-.52.06a6.32 6.32 0 01-1.86-1.15 7.02 7.02 0 01-1.3-1.62c-.14-.24 0-.37.1-.49.1-.11.22-.28.33-.42a.6.6 0 00.09-.14c.03-.06.01-.12 0-.18a.79.79 0 00-.54-.58c-.15-.04-.54-.21-.82-.35-.28-.15-.52-.33-.74-.48-.25-.18-.54-.53-.54-1.3s.56-1.52.8-1.63c.24-.12.53-.17.81-.17.27 0 .51.03.74.03.22 0 .51-.09.8.65s.94 2.32 1 2.5c.07.18.11.38.01.58s-.39.53-.57.67a.8.8 0 00-.32.41c-.05.14 0 .25.04.33.04.09.3.46.64.79a1.48 1.48 0 002.13 0c.37-.36.58-.81.67-1.03.08-.21.04-.36 0-.42-.04-.06-.14-.09-.29-.15z" />
          </svg>
          <span className="hidden sm:inline">Chat on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
