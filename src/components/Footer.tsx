import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
      <p>
        Follow me on 
        <a href="https://github.com/cfox-mykyta" target="_blank" className="text-blue-400 hover:text-blue-600 ml-1">GitHub</a>
      </p>
      <p>&copy; 2024 My Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
