// src/app/soft-skills/page.tsx
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// Тип для навичок
interface Skill {
  title: string;
  score: string;
  maxScore: number;
  status: string;
}

// Тип для сертифікатів
interface Certificate {
  title: string;
  score: string;
  maxScore: number;
  status: string;
}

const SoftSkills: React.FC = () => {
  // Функція для розрахунку відсотка оцінки
  const calculatePercentage = (score: string, maxScore: number) => {
    const [obtained, total] = score.split('/').map(Number);
    return (obtained / total) * 100;
  };

  // Список навичок
  const skills: Skill[] = [
    { title: 'HTML5 & CSS3 Стартовий', score: '49/50', maxScore: 50, status: 'ОТРИМАНО' },
    { title: 'HTML5 & CSS3 Базовий', score: '37/40', maxScore: 40, status: 'ОТРИМАНО' },
    { title: 'HTML5 & CSS3 Поглиблений', score: '26/30', maxScore: 30, status: 'ОТРИМАНО' },
    { title: 'Bootstrap 4', score: '24/25', maxScore: 25, status: 'ОТРИМАНО' },
    { title: 'Верстка сайту на CSS Grid', score: '41/50', maxScore: 50, status: 'ОТРИМАНО' },
    { title: 'Практичний курс з верстки лендінгу', score: '33/45', maxScore: 45, status: 'ОТРИМАНО' },
    { title: 'JavaScript Стартовий', score: '68/70', maxScore: 70, status: 'ОТРИМАНО' },
    { title: 'JavaScript Базовий', score: '38/40', maxScore: 40, status: 'ОТРИМАНО' },
    { title: 'JavaScript Розширені можливості', score: '32/40', maxScore: 40, status: 'ОТРИМАНО' },
    { title: 'JavaScript Шаблони', score: '24/25', maxScore: 25, status: 'ОТРИМАНО' },
    { title: 'ECMAScript 6', score: '29/35', maxScore: 35, status: 'ОТРИМАНО' },
    { title: 'TypeScript Fundamentals', score: '19/20', maxScore: 20, status: 'ОТРИМАНО' },
    { title: 'React Базовий', score: '43/50', maxScore: 50, status: 'ОТРИМАНО' },
    { title: 'React Поглиблений', score: '36/40', maxScore: 40, status: 'ОТРИМАНО' },
    { title: 'Angular Базовий', score: '46/50', maxScore: 50, status: 'ОТРИМАНО' },
    { title: 'Angular Поглиблений', score: '25/25', maxScore: 25, status: 'ОТРИМАНО' },
    { title: 'Vue.js Стартовий', score: '21/30', maxScore: 30, status: 'ОТРИМАНО' },
    { title: 'Основи роботи з Git', score: '29/30', maxScore: 30, status: 'ОТРИМАНО' },
  ];

  // Список сертифікатів
  const certificates: Certificate[] = [
    { title: 'HTML Coder', score: '35/36', maxScore: 36, status: 'ОТРИМАНО' },
    { title: 'Frontend Developer', score: '50/56', maxScore: 56, status: 'ОТРИМАНО' },
    { title: 'JavaScript Developer', score: '21/26', maxScore: 26, status: 'ОТРИМАНО' },
    { title: 'Angular Developer', score: '19/19', maxScore: 19, status: 'ОТРИМАНО' },
    { title: 'React Developer', score: '13/13', maxScore: 13, status: 'ОТРИМАНО' },
  ];

  return (
    <>
      {/* Хедер */}
      <Header />

      {/* Основний контент - секція навичок і сертифікатів */}
      <section className="bg-zinc-900 text-gray-300 py-12 px-6 min-h-screen mt-12">
        <div className="max-w-screen-xl mx-auto">
          {/* Заголовок */}
          <h2 className="text-4xl font-bold text-center mb-8 text-white">
            Мої <span className="text-sky-500">Сертифікати</span> та <span className="text-sky-500">Дипломи</span>
          </h2>

          {/* Сітка навичок */}
          <h3 className="text-3xl font-semibold text-center mb-8 text-white">Сертифікати по технологіям</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {skills.map((skill, index) => {
              const percentage = calculatePercentage(skill.score, skill.maxScore);
              return (
                <div key={index} className="bg-zinc-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-zinc-700 transition duration-300">
                  <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
                  <p className="text-sm text-gray-400">{skill.score} - {skill.status}</p>
                  {/* Прогрес-бар */}
                  <div className="mt-4">
                    <div className="text-sm text-gray-400">Прогрес: {percentage.toFixed(2)}%</div>
                    <div className="w-full bg-zinc-700 rounded-full h-2 mt-2">
                      <div
                        className="bg-sky-500 h-2 rounded-full"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Сітка сертифікатів */}
          <h3 className="text-3xl font-semibold text-center mb-8 text-white">Дипломи по спеціальностям</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((certificate, index) => {
              const percentage = calculatePercentage(certificate.score, certificate.maxScore);
              return (
                <div key={index} className="bg-zinc-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-zinc-700 transition duration-300">
                  <h3 className="text-xl font-semibold text-white">{certificate.title}</h3>
                  <p className="text-sm text-gray-400">{certificate.score} - {certificate.status}</p>
                  {/* Прогрес-бар */}
                  <div className="mt-4">
                    <div className="text-sm text-gray-400">Прогрес: {percentage.toFixed(2)}%</div>
                    <div className="w-full bg-zinc-700 rounded-full h-2 mt-2">
                      <div
                        className="bg-sky-500 h-2 rounded-full"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Футер */}
      <Footer />
    </>
  );
};

export default SoftSkills;