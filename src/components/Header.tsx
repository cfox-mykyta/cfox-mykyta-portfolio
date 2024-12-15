'use client';

import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Header: React.FC = () => {
  // Стейт для керування видимістю мобільного меню
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Функція для перемикання видимості меню
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Функція для закриття меню після вибору
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-zinc-800 text-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        {/* Логотип */}
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse group">
          <span className="font-bold text-gray-300 group-hover:text-orange-500 transition">
            cfox
          </span>
        </a>

        {/* Навігація */}
        <nav className={`hidden md:flex space-x-6 text-sm font-semibold`}>
          <a
            href="#home"
            className="text-gray-300 hover:text-orange-500 transition"
          >
            Home
          </a>
          <a
            href="#skills"
            className="text-gray-300 hover:text-orange-500 transition"
          >
            Skills
          </a>
          <a
            href="#portfolio"
            className="text-gray-300 hover:text-orange-500 transition"
          >
            Portfolio
          </a>
          <a
            href="#contacts"
            className="text-gray-300 hover:text-orange-500 transition"
          >
            Contacts
          </a>
        </nav>

        {/* Соцмережі */}
        <div className="hidden md:flex space-x-4 text-lg">
          <a
            href="https://github.com/cfox-mykyta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-orange-500 transition"
          >
            <FaGithub />
          </a>

          <a
            href="mailto:your-email@gmail.com"
            className="text-gray-300 hover:text-orange-500 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-orange-500 transition"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Кнопка для мобільного меню */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition"
          aria-label="Toggle navigation"
          onClick={toggleMenu} // Встановлення функції для перемикання
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-300 hover:text-orange-500 transition"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Мобільне меню */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out transform ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-zinc-700`}
      >
        <nav className="flex flex-col space-y-4 p-4">
          <a
            href="#home"
            className="text-gray-300 hover:text-orange-500 transition"
            onClick={closeMenu} // Закрити меню після натискання
          >
            Home
          </a>
          <a
            href="#skills"
            className="text-gray-300 hover:text-orange-500 transition"
            onClick={closeMenu}
          >
            Skills
          </a>
          <a
            href="#portfolio"
            className="text-gray-300 hover:text-orange-500 transition"
            onClick={closeMenu}
          >
            Portfolio
          </a>
          <a
            href="#contacts"
            className="text-gray-300 hover:text-orange-500 transition"
            onClick={closeMenu}
          >
            Contacts
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;