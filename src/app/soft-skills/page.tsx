import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface Skill {
  title: string;
  score: string;
  maxScore: number;
  status: string;
  url?: string;  // Додамо поле для URL
}

interface Certificate {
  title: string;
  score: string;
  maxScore: number;
  status: string;
  url?: string;  // Додамо поле для URL
}

const ProgressBar: React.FC<{ score: string }> = ({ score }) => {
  const [obtained, total] = score.split('/').map(Number);
  const percentage = (obtained / total) * 100;

  return (
    <div className="mt-4">
      <div className="text-sm text-gray-400">Прогрес: {percentage.toFixed(2)}%</div>
      <div className="w-full bg-zinc-700 rounded-full h-2 mt-2">
        <div className="bg-sky-500 h-2 rounded-full" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

const SoftSkills: React.FC = () => {
  // Список навичок
  const skills: Skill[] = [
    { title: 'HTML5 & CSS3 Стартовий', score: '49/50', maxScore: 50, status: 'ОТРИМАНО', url: 'https://example.com/html5-css3-startovyy' },
    { title: 'HTML5 & CSS3 Базовий', score: '37/40', maxScore: 40, status: 'ОТРИМАНО', url: 'https://example.com/html5-css3-bazovyy' },
    { title: 'HTML5 & CSS3 Поглиблений', score: '26/30', maxScore: 30, status: 'ОТРИМАНО', url: 'https://example.com/html5-css3-pohlyblenyy' },
    { title: 'Bootstrap 4', score: '24/25', maxScore: 25, status: 'ОТРИМАНО', url: 'https://example.com/bootstrap-4' },
    { title: 'Верстка сайту на CSS Grid', score: '41/50', maxScore: 50, status: 'ОТРИМАНО', url: 'https://example.com/css-grid' },
    { title: 'Практичний курс з верстки лендінгу', score: '33/45', maxScore: 45, status: 'ОТРИМАНО', url: 'https://example.com/verstka-lendingu' },
    { title: 'JavaScript Стартовий', score: '68/70', maxScore: 70, status: 'ОТРИМАНО', url: 'https://example.com/javascript-startovyy' },
    { title: 'JavaScript Базовий', score: '38/40', maxScore: 40, status: 'ОТРИМАНО', url: 'https://example.com/javascript-bazovyy' },
    { title: 'JavaScript Розширені можливості', score: '32/40', maxScore: 40, status: 'ОТРИМАНО', url: 'https://example.com/javascript-rozshireni-mozhlyvosti' },
    { title: 'JavaScript Шаблони', score: '24/25', maxScore: 25, status: 'ОТРИМАНО', url: 'https://example.com/javascript-shablony' },
    { title: 'ECMAScript 6', score: '29/35', maxScore: 35, status: 'ОТРИМАНО', url: 'https://example.com/ecmascript-6' },
    { title: 'TypeScript Fundamentals', score: '19/20', maxScore: 20, status: 'ОТРИМАНО', url: 'https://example.com/typescript-fundamentals' },
    { title: 'React Базовий', score: '43/50', maxScore: 50, status: 'ОТРИМАНО', url: 'https://example.com/react-bazovyy' },
    { title: 'React Поглиблений', score: '36/40', maxScore: 40, status: 'ОТРИМАНО', url: 'https://example.com/react-pohlyblenyy' },
    { title: 'Angular Базовий', score: '46/50', maxScore: 50, status: 'ОТРИМАНО', url: 'https://example.com/angular-bazovyy' },
    { title: 'Angular Поглиблений', score: '25/25', maxScore: 25, status: 'ОТРИМАНО', url: 'https://example.com/angular-pohlyblenyy' },
    { title: 'Vue.js Стартовий', score: '21/30', maxScore: 30, status: 'ОТРИМАНО', url: 'https://example.com/vuejs-startovyy' },
    { title: 'Основи роботи з Git', score: '29/30', maxScore: 30, status: 'ОТРИМАНО', url: 'https://example.com/osnovy-roboty-z-git' },
  ];

  // Список сертифікатів
  const certificates: Certificate[] = [
    { title: 'Frontend Developer', score: '50/56', maxScore: 56, status: 'ОТРИМАНО', url: 'https://example.com/frontend-developer' },
    { title: 'React Developer', score: '13/13', maxScore: 13, status: 'ОТРИМАНО', url: 'https://example.com/react-developer' },
    { title: 'Angular Developer', score: '19/19', maxScore: 19, status: 'ОТРИМАНО', url: 'https://example.com/angular-developer' },
    { title: 'JavaScript Developer', score: '21/26', maxScore: 26, status: 'ОТРИМАНО', url: 'https://example.com/javascript-developer' },
    { title: 'HTML Coder', score: '35/36', maxScore: 36, status: 'ОТРИМАНО', url: 'https://example.com/html-coder' },
  ];

  return (
    <>
      <Header />
      <section className="bg-zinc-900 text-gray-300 py-12 px-6 min-h-screen mt-12">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-white">
            Мої <span className="text-sky-500">Сертифікати</span> та <span className="text-sky-500">Дипломи</span>
          </h2>

          {/* Блок Дипломи */}
          <div>
            <h3 className="text-3xl font-semibold text-center mb-6">Сертифікати</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <a key={index} href={skill.url} target="_blank" rel="noopener noreferrer" className="no-underline">
                  <div className="bg-zinc-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-zinc-700 transition duration-300">
                    <h4 className="text-xl font-semibold text-white">{skill.title}</h4>
                    <p className="text-sm text-gray-400">{skill.score} - {skill.status}</p>
                    <ProgressBar score={skill.score} />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Блок Сертифікати */}
          <div className="mb-12">
            <h3 className="text-3xl font-semibold text-center mb-6 mt-6">Дипломи</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((certificate, index) => (
                <a key={index} href={certificate.url} target="_blank" rel="noopener noreferrer" className="no-underline">
                  <div className="bg-zinc-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-zinc-700 transition duration-300">
                    <h4 className="text-xl font-semibold text-white">{certificate.title}</h4>
                    <p className="text-sm text-gray-400">{certificate.score} - {certificate.status}</p>
                    <ProgressBar score={certificate.score} />
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </>
  );
};

export default SoftSkills;