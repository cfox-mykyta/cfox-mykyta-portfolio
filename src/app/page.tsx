import React from 'react';
import Hero from '../components/Hero';
import Motivation from '../components/Motivation';

const Page: React.FC = () => {
  return (
    <>
      <div className='bg-zinc-900'>
        <Hero />
        <Motivation />
      </div>
    </>
  );
};

export default Page;
