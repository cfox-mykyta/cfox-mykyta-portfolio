import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface Skill {
  title: string;
  score: string;
  maxScore: number;
  status: string;
}

interface Certificate {
  title: string;
  score: string;
  maxScore: number;
  status: string;
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
    { title: 'HTML5 & CSS3 Стартовий', score: '49/50', maxScore: 50, status: 'ОТРИМАНО' },
    { title: 'HTML5 & CSS3 Базовий', score: '37/40', maxScore: 40, status: 'ОТРИМАНО' },
    { title: 'HTML5 & CSS3 Поглиблений', score: '26/30', maxScore: 30, status: 'ОТРИМАНО' },
    // Інші навички
  ];

  // Список сертифікатів
  const certificates: Certificate[] = [
    { title: 'HTML Coder', score: '35/36', maxScore: 36, status: 'ОТРИМАНО' },
    { title: 'Frontend Developer', score: '50/56', maxScore: 56, status: 'ОТРИМАНО' },
    // Інші сертифікати
  ];

  return (
    <>
      <Header />
      <section className="bg-zinc-900 text-gray-300 py-12 px-6 min-h-screen mt-12">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-white">
            Мої <span className="text-sky-500">Сертифікати</span> та <span className="text-sky-500">Дипломи</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {skills.map((skill, index) => (
              <div key={index} className="bg-zinc-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-zinc-700 transition duration-300">
                <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
                <p className="text-sm text-gray-400">{skill.score} - {skill.status}</p>
                <ProgressBar score={skill.score} />
              </div>
            ))}
            {certificates.map((certificate, index) => (
              <div key={index} className="bg-zinc-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-zinc-700 transition duration-300">
                <h3 className="text-xl font-semibold text-white">{certificate.title}</h3>
                <p className="text-sm text-gray-400">{certificate.score} - {certificate.status}</p>
                <ProgressBar score={certificate.score} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SoftSkills;
