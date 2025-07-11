'use client'; // Це робить компонент клієнтським

import React from 'react';
import Link from 'next/link'; // Імпортуємо Link для переходу між сторінками

const Hero: React.FC = () => {
    return (
        <section
            id="home"
            className="bg-zinc-900 text-gray-300 flex items-center justify-center min-h-screen px-6 md:px-4 relative overflow-hidden"
        >
            <div className="max-w-4xl text-center relative z-10">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-sky-500 mb-6">
                    Welcome to My Portfolio
                </h1>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-8">
                    Hi, I’m Mykyta, a passionate web developer who loves to build modern,
                    responsive, and user-friendly websites. Explore my work and skills below.
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <Link
                        href="/portfolio"
                        className="bg-zinc-600 text-zinc-100 px-6 py-3 rounded-lg shadow-md hover:bg-zinc-700 hover:text-zinc-200 transition w-full sm:w-auto"
                    >
                        See My Work
                    </Link>
                    <Link
                        href="/soft-skills"  // Перехід на сторінку скілів
                        className="bg-sky-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-sky-600 transition w-full sm:w-auto"
                    >
                        View My Skills
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
