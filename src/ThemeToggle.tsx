import { useState, useEffect } from 'react';

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        // Check for saved theme preference or default to dark
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDark(savedTheme === 'dark');
            if (savedTheme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    }, []);

    const toggleTheme = () => {
        setIsDark((prev) => {
            const newIsDark = !prev;
            if (newIsDark) {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            }
            return newIsDark;
        });
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative w-12 h-6 bg-light rounded-full p-1 transition-all duration-300 hover:scale-110"
            aria-label="Toggle theme"
        >
            <div className={`w-4 h-4 bg-primary rounded-full transition-transform duration-300 ${isDark ? 'translate-x-6' : 'translate-x-0'}`}>
                {isDark ? (
                    <i className="fas fa-moon text-white text-xs flex items-center justify-center h-full"></i>
                ) : (
                    <i className="fas fa-sun text-white text-xs flex items-center justify-center h-full"></i>
                )}
            </div>
        </button>
    );
} 