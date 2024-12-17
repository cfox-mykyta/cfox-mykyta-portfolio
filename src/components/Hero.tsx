'use client'; // Це робить компонент клієнтським

import React from 'react';
import dynamic from 'next/dynamic';

const Hero: React.FC = () => {
    return (
        <section
            id="home"
            className="bg-zinc-900 text-gray-300 flex items-center justify-center min-h-screen px-6 md:px-4 relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-700 animate-gradient"></div> {/* Анімація градієнта */}
            <div className="max-w-4xl text-center relative z-10">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-sky-500 mb-6">
                    Welcome to My Portfolio
                </h1>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-8">
                    Hi, I’m Mykyta, a passionate web developer who loves to build modern,
                    responsive, and user-friendly websites. Explore my work and skills below.
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <a
                        href="#portfolio"
                        className="bg-gray-700 text-gray-300 px-6 py-3 rounded-lg shadow-md hover:bg-gray-600 transition w-full sm:w-auto"
                    >
                        See My Work
                    </a>
                    <a
                        href="#skills"
                        className="bg-sky-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-sky-600 transition w-full sm:w-auto"
                    >
                        View My Skills
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
