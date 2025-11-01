interface AboutProps {
    isDarkMode: boolean;
}

function About({ isDarkMode }: AboutProps) {
    return (
        <section className="container mx-auto px-6 py-16">
            <div className={`max-w-4xl mx-auto backdrop-blur-sm rounded-lg p-8 shadow-xl ${
                isDarkMode ? 'bg-white/10' : 'bg-gray-100'
            }`}>
                <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>Who I Am</h2>
                <p className={`text-lg mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                    I'm a Programmer Analyst III at Texas Tech University, currently working with
                    Enrollment Management. I specialize in building scalable Salesforce solutions
                    that solve real business problems.
                </p>
                <p className={`text-lg mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                    My most notable project is the <span className={`font-semibold ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>Graduate School Award Tracker</span>,
                    a data-driven web application built with Apex and Lightning Web Components that processes all
                    Texas Tech Graduate student funding requirements.
                </p>
                <p className={`text-lg ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                    I'm passionate about creating systems that not only work technically, but deliver
                    measurable business value.
                </p>    
            </div>
        </section>
    );
}

export default About;