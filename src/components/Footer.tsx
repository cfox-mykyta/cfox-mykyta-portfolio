'use client';

import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitted(true);
    setPhoneNumber('');
  };

  return (
    <footer className="bg-zinc-800 text-gray-300 py-6">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-4 flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0 sm:space-x-12">
        {/* Контактна інформація */}
        <div className="text-sm text-gray-400 flex flex-col items-center sm:items-start cursor-default">
          <p className="cursor-default">
            Phone: <a href="tel:+1234567890" aria-label="Call us at +1 (234) 567-890">+1 (234) 567-890</a>
          </p>
          <p className="cursor-default">
            Email: <a href="mailto:your-email@gmail.com" aria-label="Email us at your-email@gmail.com">your-email@gmail.com</a>
          </p>
        </div>

        {/* Форма зворотного зв'язку */}
        <div className="flex flex-col items-center sm:items-start sm:w-1/3 space-y-4 sm:space-y-0">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="tel"
              placeholder="Your Phone Number"
              value={phoneNumber}
              onChange={handlePhoneChange}
              required
              className="p-3 w-full sm:w-2/3 text-gray-700 rounded-md focus:outline-none text-sm"
            />
            <button
              type="submit"
              className="bg-sky-500 text-white p-3 rounded-md hover:bg-sky-600 transition w-full sm:w-1/3 text-sm"
            >
              {isSubmitted ? 'Sent!' : 'Send'}
            </button>
          </form>
          {isSubmitted && <span className="text-sm text-green-500 mt-2">Thank you! We will contact you soon.</span>}
        </div>

        {/* Графік роботи */}
        <div className="text-sm text-gray-400 flex flex-col items-center sm:items-start cursor-default">
          <p className="cursor-default">
            Working Hours: 9:00 AM - 6:00 PM
          </p>
          <p className="cursor-default">
            Monday - Friday
          </p>
        </div>
      </div>

      <div className="mt-6 border-t border-zinc-700 pt-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} cfox. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;









