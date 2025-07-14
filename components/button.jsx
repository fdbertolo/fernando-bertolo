'use client';

import React, { useState, useEffect } from 'react';

const gradientStyles = [
    'from-purple-700 to-blue-600 group-hover:from-purple-700 group-hover:to-blue-600 focus:ring-blue-500 dark:focus:ring-blue-800',
    'from-cyan-600 to-blue-600 group-hover:from-cyan-600 group-hover:to-blue-600 focus:ring-cyan-400 dark:focus:ring-cyan-800',
    'from-green-500 to-blue-700 group-hover:from-green-500 group-hover:to-blue-700 focus:ring-green-400 dark:focus:ring-green-800',
    'from-purple-600 to-pink-600 group-hover:from-purple-600 group-hover:to-pink-600 focus:ring-purple-400 dark:focus:ring-purple-800',
    'from-pink-600 to-orange-500 group-hover:from-pink-600 group-hover:to-orange-500 focus:ring-pink-400 dark:focus:ring-pink-800',
    'from-teal-500 to-lime-500 group-hover:from-teal-600 group-hover:to-lime-600 focus:ring-lime-500 dark:focus:ring-lime-800',
    'from-red-400 via-red-500 to-yellow-400 group-hover:from-red-400 group-hover:via-red-500 group-hover:to-yellow-400 focus:ring-red-100 dark:focus:ring-red-500'
];

const Button = ({ text }) => {
    const [randomGradient, setRandomGradient] = useState('');

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * gradientStyles.length);
        setRandomGradient(gradientStyles[randomIndex]);
    }, []);

    return (

        <button
            className={`relative inline-flex items-center justify-center p-0.5 overflow-hidden font-medium text-neutral-300 rounded-md group bg-gradient-to-br hover:text-white focus:ring-4 focus:outline-none cursor-pointer ${randomGradient}`}
        >
            <span className="relative flex items-center h-11 px-6 transition-all ease-in duration-300 bg-zinc-900 rounded-md group-hover:bg-transparent text-shadow-xs hover:text-white">
                {text}
                <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-300 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
                    <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/3000/svg"
                        className="h-5 w-5"
                    >
                        <path
                            d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </div>
            </span>
        </button>
    );
};

export default Button;
