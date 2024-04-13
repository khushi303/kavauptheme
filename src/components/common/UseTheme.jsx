// useTheme.js
import { useState, useEffect } from 'react';

export const useTheme = () => {
    const [theme, setTheme] = useState('themepink');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);

    const toggleTheme = () => {
        const themes = ['themepink', 'themegreen', 'theme-purple', 'themeblue'];
        const currentIndex = themes.indexOf(theme);
        const newIndex = (currentIndex + 1) % themes.length;
        const newTheme = themes[newIndex];
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return { theme, toggleTheme };
};
