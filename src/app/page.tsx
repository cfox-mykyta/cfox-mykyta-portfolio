import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Motivation from '../components/Motivation';
import Footer from '../components/Footer';

const Page: React.FC = () => {
  return (
    <>
      <div className='bg-zinc-900'>
        <Header />
        <Hero />
        <Motivation />
        <Footer />
      </div>
    </>
  );
};

export default Page;
