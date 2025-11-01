interface SkillsProps {
    isDarkMode: boolean;
}

function Skills({ isDarkMode }: SkillsProps) {
    return (
        <section className="container mx-auto px-6 py-16">
            <div className={`max-w-4xl mx-auto backdrop-blur-sm rounded-lg p-8 shadow-xl ${
                isDarkMode ? 'bg-white/10' : 'bg-gray-100'
            }`}>
                <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>What I'm Looking For</h2>
                <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                    I'm a <span className={`font-semibold ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>business-minded problem solver</span>,
                    seeking roles that intersect business logic and technical implementation.
                </p>


                <div className="space-y-4">
                    <div className="border-l-4 border-blue-400 pl-4">
                        <h3 className={`text-xl font-semibold mb-2/3 ${isDarkMode ? 'text-blue-200/purple-300' : 'text-blue-700/purple-700'}`}>Target Roles:</h3>
                        <ul className={`text-gray-200 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                            <li>Salesforce Administrator</li>
                            <li>Business Systems Analyst</li>
                            <li>Solutions Engineer</li>
                        </ul>
                    </div>

                    <div className="border-l-4 border-purple-400 pl-4">
                        <h3 className={`text-xl font-semibold mb-2/3 ${isDarkMode ? 'text-blue-200/purple-300' : 'text-blue-700/purple-700'}`}>Location:</h3>
                        <p className={`text-gray-200 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                            Currently in Lubbock, TX | Open to opportunities in Dallas-Fort Worth area
                        </p>
                    </div>
                </div>

                <div className="mt-8">
                    <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>Technical Skills</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className={`text-xl font-semibold mb-2/3 ${isDarkMode ? 'text-blue-200/purple-300' : 'text-blue-700/purple-700'}`}>Languages</h3>
                            <p className={`text-gray-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>JavaScript, HTML/CSS, Apex, SQL, Python, TypeScript</p>
                        </div>
                        <div>
                            <h3 className={`text-xl font-semibold mb-2/3 ${isDarkMode ? 'text-blue-200/purple-300' : 'text-blue-700/purple-700'}`}>Frameworks & Tools</h3>
                            <p className={`text-gray-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>LWC, Salesforce, React, Git, VS Code</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;