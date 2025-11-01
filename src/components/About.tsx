import Card from './ui/Card';
import { about } from '../content/portfolio';

interface AboutProps {
    isDarkMode: boolean;
}

function About({ isDarkMode }: AboutProps) {
    return (
        <section className="container mx-auto px-6 py-16">
            <Card isDarkMode={isDarkMode}>
                <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-800'}`}>
                    {about.title}
                </h2>

                <p className={`text-lg mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                    {about.intro}
                </p>

                <p className={`text-lg mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                    {about.highlight.before}
                    <span className={`font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-800'}`}>
                        {about.highlight.project}
                    </span>
                    {about.highlight.after}
                </p>

                <p className={`text-lg ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                    {about.closing}
                </p>
            </Card>
        </section>
    );
}

export default About;