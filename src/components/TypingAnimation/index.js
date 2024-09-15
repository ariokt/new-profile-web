'use client';
import { useEffect, useState } from "react";

const TypingAnimation = ({ texts }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentArrayIndex, setCurrentArrayIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentText = '';

    const interval = setInterval(() => {
      if (currentText.length === texts[currentArrayIndex].length) {
        clearInterval(interval);
        if (currentArrayIndex === texts.length - 1) {
          setCurrentArrayIndex(0)
        } else {
          setCurrentArrayIndex((prevArrIndex) => prevArrIndex + 1);
        }
        setTimeout(() => {
          setCurrentTextIndex((prevTextIndex) => (prevTextIndex + 1) % texts.length);
          setDisplayText('');
        }, 3000); // Delay between texts
        return;
      }

      currentText = texts[currentArrayIndex].slice(0, currentText.length + 1);
      setDisplayText(currentText);
    }, 100); // Typing speed

    return () => {
      clearInterval(interval)
    };
  }, [texts, currentTextIndex]);

  // return <h2 className='text-[#01355C] w-fit text-xl md:text-4xl font-bold'>{`${displayText}|`}</h2>;
  return <h2 className='text-white opacity-70 w-fit text-xl md:text-4xl font-bold'>{`${displayText}|`}</h2>;
}

export default TypingAnimation