import React, { ReactNode } from 'react';
import '../styles/globals.css';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <html lang="en">
        <body className="min-h-screen flex flex-col">
          {children}
        </body>
      </html>
    </>
  );
};

export default Layout;

