// 'use client';
import React from 'react';
import { FaUsers, FaLightbulb, FaClock, FaHandshake, FaCommentDots } from 'react-icons/fa';

const SoftSkills: React.FC = () => {
  // Список soft skills
  const skills = [
    {
      title: 'Комунікація',
      description: 'Уміння чітко передавати ідеї команді.',
      icon: <FaCommentDots className="text-sky-500 text-4xl" />,
    },
    {
      title: 'Креативність',
      description: 'Вирішення нестандартних завдань.',
      icon: <FaLightbulb className="text-yellow-500 text-4xl" />,
    },
    {
      title: 'Тайм-менеджмент',
      description: 'Ефективне планування часу.',
      icon: <FaClock className="text-red-500 text-4xl" />,
    },
    {
      title: 'Командна робота',
      description: 'Співпраця з різними командами.',
      icon: <FaUsers className="text-green-500 text-4xl" />,
    },
    {
      title: 'Адаптивність',
      description: 'Швидке освоєння нових технологій.',
      icon: <FaHandshake className="text-purple-500 text-4xl" />,
    },
  ];

  return (
    <section className="bg-zinc-900 text-gray-300 py-12 px-6">
      <div className="max-w-screen-xl mx-auto">
        {/* Заголовок */}
        <h2 className="text-4xl font-bold text-center mb-8 text-white">
          Мої <span className="text-sky-500">Soft Skills</span>
        </h2>

        {/* Сітка навичок */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-zinc-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-zinc-700 transition duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                {/* Іконка */}
                <div>{skill.icon}</div>
                {/* Заголовок навички */}
                <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
              </div>
              {/* Опис навички */}
              <p className="text-sm text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;