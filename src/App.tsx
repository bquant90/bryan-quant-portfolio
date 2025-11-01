import {FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Bryan Quant
        </h1>
        <p className="text-xl md:text-2xl text-blue-300 mb-8">
          Programmer Analyst
        </p>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Solutions-driven developer with experience in the Salesforce ecosystem,
          seeking to bridge business logic and technical implementation.
        </p>
      </header>

      {/* About Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-blue-300">Who I Am</h2>
          <p className="text-lg text-gray-200 mb-4">
            I'm a Programmer Analyst III at Texas Tech University, currently working with
            Enrollment Management. I specialize in building scalable Salesforce solutions
            that solve real business problems.
          </p>
          <p className="text-lg text-gray-200 mb-4">
            My most notable project is the <span className="text-blue-300 font-semibold">Graduate School Award Tracker</span>,
            a data-driven web application built with Apex and Lightning Web Components that processes all
            Texas Tech Graduate student funding requirements.
          </p>
          <p className="text-lg text-gray-200">
            I'm passionate about creating systems that not only work technically, but deliver
            measurable business value.
          </p>
        </div>
      </section>

      {/* What I'm Looking For Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-blue-300">What I'm Looking For</h2>
          <p className="text-lg text-gray-200 mb-6">
            I'm a <span className="text-blue-300 font-semibold">business-minded problem solver</span>.
            I'm seeking roles that intersect business logic and technical implementation.
          </p>
          
          <div className="space-y-4">
            <div className="border-l-4 border-blue-400 pl-4">
              <h3 className="text-xl font-semibold text-blue-300 mb-2">Target Roles:</h3>
              <ul className="list-disc list-inside text-gray-200 space-y-2">
                <li>Salesforce Administrator</li>
                <li>Business Systems Analyst</li>
                <li>Solutions Engineer</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-400 pl-4">
              <h3 className="text-xl font-semibold text-purple-300 mb-2">Location:</h3>
              <p className="text-gray-200">
                Currently in Lubbock, TX | Open to opportunities in Dallas-Fort Worth area
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-blue-300">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-200 mb-3">Languages</h3>
              <p className="text-gray-300">JavaScript, HTML/CSS, Apex, SQL, Python, TypeScript</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-200 mb-3">Frameworks & Tools</h3>
              <p className="text-gray-300">LWC, Salesforce, React, Git, VS Code</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          {/* Copyright */}
          <p className="text-gray-400">© 2025 Bryan Quant</p>

          {/* Social Icons */}
          <div className="flex gap-4">
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
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
