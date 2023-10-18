import React, { useState, useEffect } from 'react';
import Navigation_copy from '../Navigation copy/Navigation_copy'
import Hero_copy from '../Hero copy/Hero_copy'

import './scroll.css'


const ScrollingWords = () => {
    const words = ["Rápido", "Fiable", "Sin complicaciones"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 1500);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <>
            <Navigation_copy aria-label="Main navigation" />
            <Hero_copy aria-label="Hero" />
            <div className="scrolling-words">
                {words.map((word, index) => (
                    <div
                        key={index}
                        className={`scrolling-word ${index === currentWordIndex ? 'active' : ''}`}
                    >
                        {word}
                    </div>
                ))}
            </div>



        </>
    );
};

export default ScrollingWords;
