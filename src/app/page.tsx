'use client';

import React, { useEffect, useState } from 'react';

const Clock: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const kyivTime = new Date().toLocaleTimeString('uk-UA', {
        timeZone: 'Europe/Kyiv',
        hour12: false,
      });
      setTime(kyivTime);
    };

    updateClock(); // Update immediately
    const intervalId = setInterval(updateClock, 1000); // Update every second

    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, []);

  return (
    <h1 className="text-9xl font-extrabold tracking-widest" style={{ fontFamily: 'Roboto Mono, monospace' }}>
      {time}
    </h1>
  );
};

const Page: React.FC = () => {
  return (
    <main>
      <Clock />
    </main>
  );
};

export default Page;

