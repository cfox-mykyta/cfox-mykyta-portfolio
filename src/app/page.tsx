import React from 'react';
import Navigation from '../components/Navigation';  // Імпортуємо компонент Navigation
import Footer from '../components/Footer';  // Імпортуємо компонент Footer

const Page: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navigation />
      <div className="flex-grow">
        {/* Ваш контент тут */}
      </div>
      <Footer />
    </main>
  );
};

export default Page;