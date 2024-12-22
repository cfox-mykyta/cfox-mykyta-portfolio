import React from 'react';
import Head from 'next/head'; // Імпорт Head
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Contacts: React.FC = () => {
    return (
        <>
            {/* Head для додавання метаданих */}
            <Head>
                <title>Contacts | My Portfolio</title>
                <meta name="description" content="Get in touch with me for collaborations, questions, or opportunities. Check out my email, GitHub, and LinkedIn links here." />
                <meta name="keywords" content="Contacts, Portfolio, Email, GitHub, LinkedIn" />
                <meta name="author" content="Mykyta" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <div className="min-h-screen bg-zinc-900 text-white flex flex-col items-center justify-center">
                {/* Контактна інформація */}
                <div className="text-center p-6 max-w-lg">
                    <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
                    <p className="text-lg text-gray-400 mb-4">
                        If you&apos;d like to work together or have any questions, feel free to reach out!
                    </p>
                    <div className="space-y-4">
                        <a
                            href="mailto:your-email@gmail.com"
                            className="block text-lg font-semibold text-sky-500 hover:underline"
                        >
                            Email: your-email@gmail.com
                        </a>
                        <a
                            href="https://github.com/cfox-mykyta"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-lg font-semibold text-gray-400 hover:text-gray-500 transition"
                        >
                            GitHub: github.com/cfox-mykyta
                        </a>
                        <a
                            href="https://linkedin.com/in/your-linkedin"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-lg font-semibold text-sky-500 hover:underline"
                        >
                            LinkedIn: linkedin.com/in/your-linkedin
                        </a>
                    </div>
                </div>

                {/* Відгуки */}
                <div className="bg-zinc-800 w-full py-12 mt-12">
                    <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
                    <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                        <div className="bg-zinc-700 p-6 rounded-lg shadow-md">
                            <p className="text-lg italic text-gray-300">
                                &quot;An outstanding developer! Always delivers projects on time with impeccable quality.&quot;
                            </p>
                            <span className="block mt-4 text-right text-sky-500 font-semibold">— Client A</span>
                        </div>
                        <div className="bg-zinc-700 p-6 rounded-lg shadow-md">
                            <p className="text-lg italic text-gray-300">
                                &quot;Working with this professional was a pleasure. Great communication and skills!&quot;
                            </p>
                            <span className="block mt-4 text-right text-sky-500 font-semibold">— Client B</span>
                        </div>
                        <div className="bg-zinc-700 p-6 rounded-lg shadow-md">
                            <p className="text-lg italic text-gray-300">
                                &quot;The best experience I&apos;ve had with a developer. Highly recommended!&quot;
                            </p>
                            <span className="block mt-4 text-right text-sky-500 font-semibold">— Client C</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contacts;