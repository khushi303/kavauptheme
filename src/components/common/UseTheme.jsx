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
        <button className='p-3 gap-2 flex bg-bgprocess rounded-lg'>
            <select value={selectedTheme} onChange={handleChange} className='text-infinite-200 text-sm font-normal bg-bgprocess'>
                <option value="pink" className='text-infinite-100 text-pink-400 text-sm font-normal p-2 focus:outline-0'>Pink</option>
                <option value="green" className='text-infinite-100 text-green-400 text-sm font-normal p-2 focus:outline-0'>Green</option>
                <option value="purple" className='text-infinite-100 text-purple-400 text-sm font-normal p-2 focus:outline-0'>Purple</option>
                <option value="blue" className='text-infinite-100 text-blue-400 text-sm font-normal p-2 focus:outline-0'>Blue</option>
            </select>
        </button>
    );
};

export default ThemeDropdown;