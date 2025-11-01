import Card from './ui/Card';
import { goals } from '../content/portfolio';


interface GoalsProps {
    isDarkMode: boolean;
}

function Goals({ isDarkMode }: GoalsProps) {
    return (
        <section className="container mx-auto px-6 py-16">
            <Card isDarkMode={isDarkMode}>
                <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-800'}`}>
                    {goals.title}
                </h2>
                <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                    {goals.intro}
                </p>

                <div className="space-y-4">
                    <div className="border-l-4 border-blue-400 pl-4">
                        <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                            Target Roles:
                        </h3>
                        <ul className={`list-disc list-inside space-y-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                            {goals.targetRoles.map((role, index) => (
                                <li key={index}>{role}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="border-l-4 border-purple-400 pl-4">
                        <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-purple-300' : 'text-purple-700'}`}>
                            Location:
                        </h3>
                        <p className={isDarkMode ? 'text-gray-200' : 'text-gray-700'}>
                            {goals.location}
                        </p>
                    </div>
                </div>
            </Card>
        </section>
    );
}

export default Goals;