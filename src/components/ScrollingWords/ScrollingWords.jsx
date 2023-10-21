import React, { useState, useEffect } from 'react';

import './ScrollingWords.css'


const ScrollingWords = () => {
    const words = ["Rapidez", "Precisión", "Calidad", "En Valencia"];
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
            <div className="scrolling-words">
                {words.map((word, index) => (
                    <div
                        key={index}
                        className={`scrolling-word ${index === currentWordIndex ? 'active' : ''} d-flex`}
                    >
                        <p>{word}</p>
                    </div>
                ))}
            </div>



        </>
    );
};

export default ScrollingWords;
