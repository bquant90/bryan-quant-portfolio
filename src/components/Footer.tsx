import {FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { HiSun, HiMoon } from 'react-icons/hi';

interface FooterProps {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

function Footer({ isDarkMode, toggleTheme }: FooterProps) {
    return (
        <footer className={isDarkMode ? 'bg-gray-950/95' : 'bg-gray-800'}>
            <div className="px-12 py-6 flex justify-between items-center max-w-full">
                {/* Copyright */}
                <p className="text-gray-400">© 2025 Bryan Quant</p>

                <div className="flex gap-4">
                    {/* Social Icons */}
                    <a
                        href="https://www.linkedin.com/in/bryan-quant/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-400 transition duration-300"
                    >
                        <FaLinkedin size={24} />
                    </a>
                    <a
                        href="https://github.com/bquant90"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-400 transition duration-300"
                    >
                        <FaGithub size={24} />
                    </a>
                    <a
                        href="mailto:bquant90@gmail.com"
                        className="text-white hover:text-blue-400 transition duration-300"
                    >
                    <HiMail size={24} />
                    </a>
                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="text-white hover:text-blue-400 transition duration-300 ml-4"
                        aria-label="Toggle theme"
                    >
                        {isDarkMode ? <HiSun size={24} /> : <HiMoon size={24} />}
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;