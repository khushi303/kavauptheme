"use client"
import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

const ThemeDropdown = ({ onChange }) => {
    const { theme, setTheme } = useContext(ThemeContext);
    const [selectedTheme, setSelectedTheme] = useState(theme);

    const handleChange = (e) => {
        const selectedTheme = e.target.value;
        setSelectedTheme(selectedTheme);
        setTheme(selectedTheme);
    };

    useEffect(() => {
        setSelectedTheme(theme);
    }, [theme]);


    console.log(selectedTheme)
    return (
        <select value={selectedTheme} onChange={handleChange}>
            <option value="pink">Pink</option>
            <option value="green">Green</option>
            <option value="purple">Purple</option>
            <option value="blue">Blue</option>
        </select>
    );
};

export default ThemeDropdown;