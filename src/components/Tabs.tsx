'use client'; // Додаємо директиву use client для клієнтського рендеру

import React, { useState } from 'react';

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Home'); // За замовчуванням відкривається вкладка "News"

  const openPage = (tabName: string) => {
    setActiveTab(tabName); // Оновлення активної вкладки
  };

  return (
    <div className="flex flex-col h-screen"> {/* Задаємо висоту на весь екран */}
      {/* Tab buttons */}
      <div className="flex">
        <button
          onClick={() => openPage('Home')}
          className={`tablink ${activeTab === 'Home' ? 'bg-red-500' : 'bg-gray-700'} text-white flex-1 py-4 text-lg`}
        >
          Home
        </button>
        <button
          onClick={() => openPage('News')}
          className={`tablink ${activeTab === 'News' ? 'bg-green-500' : 'bg-gray-700'} text-white flex-1 py-4 text-lg`}
        >
          News
        </button>
        <button
          onClick={() => openPage('Contact')}
          className={`tablink ${activeTab === 'Contact' ? 'bg-blue-500' : 'bg-gray-700'} text-white flex-1 py-4 text-lg`}
        >
          Contact
        </button>
        <button
          onClick={() => openPage('About')}
          className={`tablink ${activeTab === 'About' ? 'bg-orange-500' : 'bg-gray-700'} text-white flex-1 py-4 text-lg`}
        >
          About
        </button>
      </div>

      {/* Tab content */}
      <div className="tabcontent flex-grow overflow-auto"> {/* Задаємо overflow-auto, щоб вміст міг прокручуватися */}
        {activeTab === 'Home' && (
          <div id="Home" className="h-full bg-red-500 p-8 text-center">
            <h3 className="text-white text-3xl">Home</h3>
            <p className="text-white">Home is where the heart is..</p>
          </div>
        )}
        {activeTab === 'News' && (
          <div id="News" className="h-full bg-green-500 p-8 text-center">
            <h3 className="text-white text-3xl">News</h3>
            <p className="text-white">Some news this fine day!</p>
          </div>
        )}
        {activeTab === 'Contact' && (
          <div id="Contact" className="h-full bg-blue-500 p-8 text-center">
            <h3 className="text-white text-3xl">Contact</h3>
            <p className="text-white">Get in touch, or swing by for a cup of coffee.</p>
          </div>
        )}
        {activeTab === 'About' && (
          <div id="About" className="h-full bg-orange-500 p-8 text-center">
            <h3 className="text-white text-3xl">About</h3>
            <p className="text-white">Who we are and what we do.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
