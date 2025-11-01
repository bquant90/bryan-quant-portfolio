import { Link, useLocation } from 'react-router-dom';

interface NavigationProps {
    isDarkMode: boolean;
}

function Navigation({ isDarkMode }: NavigationProps) {
    const location = useLocation();

    // Helper function to check if link is active
    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className={`sticky top-0 z-50 backdrop-blue-md ${
            isDarkMode ? 'bg-gray-900/90' : 'bg-white/90'
        } border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Navigation Links */}
                    <div className="flex gap-6">
                        <Link
                            to="/"
                            className={`font-medium transition pb-1 border-b-2 ${
                                isActive('/') 
                                    ? isDarkMode ? 'text-blue-400 border-blue-400' : 'text-blue-600 border-blue-600'
                                    : isDarkMode ? 'text-gray-300 border-transparent hover:text-blue-400' : 'text-gray-600 border-transparent hover:text-blue-600'
                            }`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/projects"
                            className={`font-medium transition pb-1 border-b-2 ${
                                isActive('/projects')
                                    ? isDarkMode ? 'text-blue-400 border-blue-400' : 'text-blue-600 border-blue-600'
                                    : isDarkMode ? 'text-gray-300 border-transparent hover:text-blue-400' : 'text-gray-600 border-transparent hover:text-blue-600'
                            }`}
                        >
                            Projects
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
