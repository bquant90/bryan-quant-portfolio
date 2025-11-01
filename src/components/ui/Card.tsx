interface CardProps {
    isDarkMode: boolean;
    children: React.ReactNode;
}

function Card({ isDarkMode, children }: CardProps) {
    return (
        <div className={`max-w-4xl mx-auto backdrop-blur-sm rounded-lg p-8 shadow-xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl ${
            isDarkMode ? 'bg-white/10' : 'bg-gray-100'
        }`}>
            {children}
        </div>
    );
}

export default Card;