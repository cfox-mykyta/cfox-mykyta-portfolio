'use client';

import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const sections = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'skills', label: 'Skills', href: '/soft-skills' },
    { id: 'portfolio', label: 'Portfolio', href: '/portfolio' },
    { id: 'contacts', label: 'Contacts', href: '/contacts' },
  ];

  return (
    <header className="bg-zinc-800 text-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        {/* Логотип */}
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse group">
          {/* Замість тексту додамо зображення */}
          <img
            src="/assets/logo.png"
            alt="c-fox logo"
            className="h-8 w-auto"
          />
        </a>

        {/* Навігація */}
        <nav className="hidden md:flex space-x-8 font-semibold">
          {sections.map(({ id, label, href }) => (
            <Link key={id} href={href} className="text-gray-300 hover:text-sky-500 transition">
              {label}
            </Link>
          ))}
        </nav>

        {/* Соцмережі */}
        <div className="hidden md:flex space-x-6 text-lg">
          <a
            href="https://github.com/cfox-mykyta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-500 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:your-email@gmail.com"
            className="text-gray-300 hover:text-rose-600 transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-sky-500 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Кнопка для мобільного меню */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-zinc-700 transition"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={`w-6 h-6 text-gray-300 transition-transform ${isMenuOpen ? 'rotate-90' : ''}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Мобільне меню */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out transform ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden bg-zinc-700`}
      >
        <nav className="flex flex-col space-y-6 p-6 font-semibold">
          {sections.map(({ id, label, href }) => (
            <Link
              key={id}
              href={href}
              className="text-gray-300 hover:text-sky-500 transition"
              onClick={closeMenu}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
