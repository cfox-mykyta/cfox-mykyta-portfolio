'use client';

import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Тип для мотиваційного тексту
interface MotivationText {
  text: string;
  author: string;
}

const Motivation: React.FC = () => {
    const [currentMotivation, setCurrentMotivation] = useState<number>(0); // Поточний індекс мотивації
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false); // Стан для уникнення подвійних переходів
    const [isFadingOut, setIsFadingOut] = useState<boolean>(false); // Стан для затухання тексту

    // Масив мотиваційних цитат
    const motivations: MotivationText[] = [
        {
            text: "You're either going to crush it, or be forgotten. You don't have time to quit.",
            author: "Anonymous",
        },
        {
            text: "Stop running from the grind. It hurts now, but that's what builds your future.",
            author: "Anonymous",
        },
        {
            text: "No one’s going to hand you success. You either make it happen today, or never at all.",
            author: "Anonymous",
        },
    ];

    // Функція для перемикання на попередню мотивацію
    const handlePrevious = () => {
        if (isTransitioning) return; // Якщо анімація вже відбувається, не дозволяємо перехід
        setIsTransitioning(true);
        setIsFadingOut(true); // Починаємо затухання
        setTimeout(() => {
            setCurrentMotivation((prev) => (prev === 0 ? motivations.length - 1 : prev - 1)); // Перемикаємо на попередню мотивацію
        }, 500); // Час затухання
    };

    // Функція для перемикання на наступну мотивацію
    const handleNext = () => {
        if (isTransitioning) return; // Якщо анімація вже відбувається, не дозволяємо перехід
        setIsTransitioning(true);
        setIsFadingOut(true); // Починаємо затухання
        setTimeout(() => {
            setCurrentMotivation((prev) => (prev === motivations.length - 1 ? 0 : prev + 1)); // Перемикаємо на наступну мотивацію
        }, 500); // Час затухання
    };

    // Скидаємо стани після завершення затухання
    React.useEffect(() => {
        if (!isFadingOut) return;
        const timer = setTimeout(() => {
            setIsFadingOut(false); // Після затухання скидаємо стан
            setIsTransitioning(false); // Завершуємо анімацію
        }, 500); // Час затухання
        return () => clearTimeout(timer); // Очищаємо таймер при змінах
    }, [currentMotivation, isFadingOut]);

    return (
        <div className="bg-zinc-800 py-8 mb-24">
            <div className="max-w-screen-md mx-auto text-center">
                <h2 className="text-3xl font-bold text-white">Motivation</h2>
                <div className="relative bg-zinc-700 p-6 rounded-lg shadow-md m-6">
                    <div className="overflow-hidden">
                        <div
                            className={`transition-opacity duration-500 ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}
                        >
                            <p className="text-lg italic text-gray-300">{motivations[currentMotivation].text}</p>
                            <span className="block mt-4 text-right text-sky-500 font-semibold">
                                — {motivations[currentMotivation].author}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center space-y-6">
                    <div className="flex items-center space-x-6">
                        <button
                            onClick={handlePrevious}
                            className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition flex items-center justify-center"
                            aria-label="Previous motivation"
                        >
                            <FaArrowLeft size={20} />
                        </button>

                        {/* Індикатор позиції */}
                        <div className="flex space-x-2">
                            {motivations.map((_, index) => (
                                <span
                                    key={index}
                                    className={`h-2 w-2 rounded-full ${index === currentMotivation ? 'bg-sky-500' : 'bg-gray-400'
                                        }`}
                                ></span>
                            ))}
                        </div>

                        <button
                            onClick={handleNext}
                            className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition flex items-center justify-center"
                            aria-label="Next motivation"
                        >
                            <FaArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Motivation;