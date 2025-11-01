
interface HeroProps {
    isDarkMode: boolean;
}

function Hero({ isDarkMode }: HeroProps) {
    return (
        <header className="container mx-auto px-6 py-20 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Bryan Quant
            </h1>
            <p className={`text-xl md:text-2xl mb-8 ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                Programmer Analyst
            </p>
            <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Solutions-driven developer with experience in the Salesforce ecosystem,
                seeking to bridge business logic and technical implementation.
            </p>
        </header>
    );
}

export default Hero;
