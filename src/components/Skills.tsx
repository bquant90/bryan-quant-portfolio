import Card from './ui/Card';
import { skills } from '../content/portfolio';

interface SkillsProps {
    isDarkMode: boolean;
}

function Skills({ isDarkMode }: SkillsProps) {
    return (
        <section className="container mx-auto px-6 py-16">
            <Card isDarkMode={isDarkMode}>
                <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-800'}`}>
                    {skills.title}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-blue-200' : 'text-blue-700'}`}>
                            Languages
                        </h3>
                        <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                            {skills.languages}
                        </p>
                    </div>
                    <div>
                        <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-blue-200' : 'text-blue-700'}`}>
                            Frameworks & Tools
                        </h3>
                        <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                            {skills.frameworks}
                        </p>
                    </div>
                </div>
            </Card>
        </section>
    );
}

export default Skills;