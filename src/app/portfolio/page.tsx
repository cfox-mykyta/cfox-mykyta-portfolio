'use client';

import React from 'react';
import Image from 'next/image'; // додайте імпорт

const Portfolio: React.FC = () => {
    const projects = [
        {
            title: 'Weather Wizard',
            description: 'A weather app providing real-time forecasts and alerts.',
            link: '#',
            image: '/assets/project1.png',
        },
        {
            title: 'E-Shop Express',
            description: 'A dynamic e-commerce platform for seamless online shopping.',
            link: '#',
            image: '/assets/project2.png',
        },
        {
            title: 'Creative Showcase',
            description: 'A portfolio website highlighting creative projects and designs.',
            link: '#',
            image: '/assets/project3.png',
        },
        {
            title: 'Project Tracker',
            description: 'A task management tool for efficient project tracking.',
            link: '#',
            image: '/assets/project4.png',
        },
        {
            title: 'Social Hub',
            description: 'A social media platform for connecting people worldwide.',
            link: '#',
            image: '/assets/project5.png',
        },
        {
            title: 'Fitness Planner',
            description: 'An app designed to help users create personalized fitness plans.',
            link: '#',
            image: '/assets/project6.png',
        },
    ];

    return (
        <div className="bg-zinc-900 text-white mt-12">
            <div className="max-w-screen-xl mx-auto py-12 px-6">
                <h1 className="text-4xl font-bold text-center text-sky-500 mb-12">Portfolio</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-zinc-800 p-6 rounded-lg shadow-md hover:shadow-lg transition"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={400}
                                height={160}
                                className="h-40 w-full object-cover rounded-md mb-4"
                            />
                            <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                            <p className="text-gray-400 mt-2">{project.description}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-4 text-sky-500 hover:underline"
                            >
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;