import React from 'react';

interface Skill {
  title: string;
  score: string;
  maxScore: number;
  status: string;
  url?: string;
}

interface Certificate {
  title: string;
  score: string;
  maxScore: number;
  status: string;
  url?: string;
}

const ProgressBar: React.FC<{ score: string }> = ({ score }) => {
  const [obtained, total] = score.split('/').map(Number);
  const percentage = (obtained / total) * 100;

  return (
    <div className="mt-4">
      <div className="text-sm text-gray-400">Progress: {percentage.toFixed(2)}%</div>
      <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
        <div
          className="bg-gradient-to-r from-sky-500 to-sky-400 h-2 rounded-full transition-all"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const SoftSkills: React.FC = () => {
  const skills: Skill[] = [
    { title: 'HTML5 & CSS3 Beginner', score: '49/50', maxScore: 50, status: 'ACHIEVED', url: 'https://example.com/html5-css3-startovyy' },
    { title: 'HTML5 & CSS3 Basic', score: '37/40', maxScore: 40, status: 'ACHIEVED', url: 'https://example.com/html5-css3-bazovyy' },
    { title: 'HTML5 & CSS3 Advanced', score: '26/30', maxScore: 30, status: 'ACHIEVED', url: 'https://example.com/html5-css3-pohlyblenyy' },
    { title: 'Bootstrap 4', score: '24/25', maxScore: 25, status: 'ACHIEVED', url: 'https://example.com/bootstrap-4' },
    { title: 'Website Layout with CSS Grid', score: '41/50', maxScore: 50, status: 'ACHIEVED', url: 'https://example.com/css-grid' },
    { title: 'Practical Course on Landing Page', score: '33/45', maxScore: 45, status: 'ACHIEVED', url: 'https://example.com/verstka-lendingu' },
    { title: 'JavaScript Beginner', score: '68/70', maxScore: 70, status: 'ACHIEVED', url: 'https://example.com/javascript-startovyy' },
    { title: 'JavaScript Basic', score: '38/40', maxScore: 40, status: 'ACHIEVED', url: 'https://example.com/javascript-bazovyy' },
    { title: 'JavaScript Advanced Features', score: '32/40', maxScore: 40, status: 'ACHIEVED', url: 'https://example.com/javascript-rozshireni-mozhlyvosti' },
    { title: 'JavaScript Patterns', score: '24/25', maxScore: 25, status: 'ACHIEVED', url: 'https://example.com/javascript-shablony' },
    { title: 'ECMAScript 6', score: '29/35', maxScore: 35, status: 'ACHIEVED', url: 'https://example.com/ecmascript-6' },
    { title: 'TypeScript Fundamentals', score: '19/20', maxScore: 20, status: 'ACHIEVED', url: 'https://example.com/typescript-fundamentals' },
    { title: 'React Basic', score: '43/50', maxScore: 50, status: 'ACHIEVED', url: 'https://example.com/react-bazovyy' },
    { title: 'React Advanced', score: '36/40', maxScore: 40, status: 'ACHIEVED', url: 'https://example.com/react-pohlyblenyy' },
    { title: 'Angular Basic', score: '46/50', maxScore: 50, status: 'ACHIEVED', url: 'https://example.com/angular-bazovyy' },
    { title: 'Angular Advanced', score: '25/25', maxScore: 25, status: 'ACHIEVED', url: 'https://example.com/angular-pohlyblenyy' },
    { title: 'Vue.js Beginner', score: '21/30', maxScore: 30, status: 'ACHIEVED', url: 'https://example.com/vuejs-startovyy' },
    { title: 'Git Basics', score: '29/30', maxScore: 30, status: 'ACHIEVED', url: 'https://example.com/osnovy-roboty-z-git' },
  ];

  const certificates: Certificate[] = [
    { title: 'Frontend Developer', score: '50/56', maxScore: 56, status: 'ACHIEVED', url: 'https://example.com/frontend-developer' },
    { title: 'React Developer', score: '13/13', maxScore: 13, status: 'ACHIEVED', url: 'https://example.com/react-developer' },
    { title: 'Angular Developer', score: '19/19', maxScore: 19, status: 'ACHIEVED', url: 'https://example.com/angular-developer' },
    { title: 'JavaScript Developer', score: '21/26', maxScore: 26, status: 'ACHIEVED', url: 'https://example.com/javascript-developer' },
    { title: 'HTML Coder', score: '35/36', maxScore: 36, status: 'ACHIEVED', url: 'https://example.com/html-coder' },
  ];


  return (
    <>
      <section className="bg-zinc-900 text-gray-300 py-12 px-6 min-h-screen mt-12">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-white">
            My <span className="text-sky-500">Certificates</span> and <span className="text-sky-500">Skills</span>
          </h2>

          {/* Certificates Section */}
          <div className="mb-12">
            <h3 className="text-3xl font-semibold text-center mb-6">Certificates</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((certificate, index) => (
                <a
                  key={index}
                  href={certificate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  <div className="bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-zinc-700 transition duration-300">
                    <h4 className="text-xl font-semibold text-white">{certificate.title}</h4>
                    <p className="text-sm text-gray-400">{certificate.score} - {certificate.status}</p>
                    <ProgressBar score={certificate.score} />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-3xl font-semibold text-center mb-6">Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <a
                  key={index}
                  href={skill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  <div className="bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-zinc-700 transition duration-300">
                    <h4 className="text-xl font-semibold text-white">{skill.title}</h4>
                    <p className="text-sm text-gray-400">{skill.score} - {skill.status}</p>
                    <ProgressBar score={skill.score} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SoftSkills;