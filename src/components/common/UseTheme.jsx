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


    return (
        <select value={selectedTheme} onChange={handleChange}>
            <option value="pink" className='text-infinite-100'>Pink</option>
            <option value="green" className='text-infinite-100'>Green</option>
            <option value="purple" className='text-infinite-100'>Purple</option>
            <option value="blue" className='text-infinite-100'>Blue</option>
        </select>
    );
};

export default ThemeDropdown;