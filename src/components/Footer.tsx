'use client';

import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-800 text-white py-8 mt-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Логотип */}
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse group">
            <span className="text-2xl font-semibold text-gray-300 group-hover:text-indigo-500 transition">
              cfox
            </span>
          </a>

          {/* Соціальні мережі */}
          <div className="flex space-x-6 text-xl">
            <a
              href="https://github.com/cfox-mykyta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-indigo-500 transition"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:your-email@gmail.com"
              className="text-gray-300 hover:text-indigo-500 transition"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-indigo-500 transition"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Контактна інформація */}
          <div className="text-sm text-gray-300">
            <p className="cursor-default">
              Phone: +1 (234) 567-890
            </p>
            <p className="cursor-default">Working Hours: 9:00 AM - 6:00 PM</p>
          </div>
        </div>

        {/* Форма для надсилання повідомлення */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-300 mb-4">Send a Message</h3>
          <form
            action="mailto:your-email@gmail.com"
            method="post"
            encType="text/plain"
            className="flex flex-col space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-3 text-gray-700 rounded-md focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-3 text-gray-700 rounded-md focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              required
              className="p-3 text-gray-700 rounded-md focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-indigo-500 text-white p-3 rounded-md hover:bg-indigo-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

