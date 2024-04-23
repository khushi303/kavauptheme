// =========================Theme Change===============//

'use client'
import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children, initialTheme }) => {
    const [theme, setTheme] = useState(initialTheme);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};