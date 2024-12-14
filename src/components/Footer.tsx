import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 fixed bottom-0 w-full py-4">
      <div className="mx-auto w-full max-w-screen-xl px-4">
        <span className="block text-center text-sm text-gray-500 dark:text-gray-400 font-semibold">
          2024 My Portfolio. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;