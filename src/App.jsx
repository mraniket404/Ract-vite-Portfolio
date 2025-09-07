import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import HackathonCard from './components/HackathonCard';
import HighlightCard from './components/HighlightCard';
import { projects, hackathons, highlights } from './data';

function App() {
  const [typedName, setTypedName] = useState('');
  const fullName = "Aniket Gosavi";

  useEffect(() => {
    // Typewriter effect for name
    let i = 0;
    const speed = 200;
    
    const typeWriter = () => {
      if (i < fullName.length) {
        setTypedName(fullName.substring(0, i + 1));
        i++;
        setTimeout(typeWriter, speed);
      }
    };
    
    typeWriter();
  }, []);

  const downloadCV = () => {
    const driveLink = "https://drive.google.com/file/d/1GorDpLDKcodSWnEAaO64sxr24UJ1f4AZ/view?usp=sharing";
    window.open(driveLink, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#1a0f2e] to-[#3d1f5e] text-white">
      <Navbar />
      
      {/* Home Section */}
      <section id="home" className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-30"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        
        <div className="name-container z-10">
          <div className="name">
            <h1>{typedName}</h1>
            <span className="reflection">{typedName}</span>
          </div>
        </div>
        
        <p className="text-xl mt-4 text-gray-300 z-10">Full Stack Developer & UI/UX Enthusiast</p>
        
        <button 
          className="bubbly-button z-10"
          onClick={downloadCV}
          onMouseEnter={(e) => {
            e.target.classList.remove("animate");
            void e.target.offsetWidth;
            e.target.classList.add("animate");
          }}
          onMouseLeave={(e) => {
            e.target.classList.remove("animate");
          }}
        >
          Download CV
        </button>
      </section>
      
      {/* About Section */}
      <section id="about" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-16">About Me</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Hello! I'm Aniket</h2>
              <p className="text-lg text-gray-300 mb-6">
                I'm a passionate full-stack developer with expertise in creating dynamic, user-friendly web applications. 
                I love turning complex problems into simple, beautiful, and intuitive solutions.
              </p>
              <p className="text-lg text-gray-300">
                When I'm not coding, you can find me exploring new technologies, contributing to open source, 
                or participating in hackathons to challenge myself and learn new skills.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <HighlightCard key={index} highlight={highlight} />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-16">My Projects</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Hackathons Section */}
      <section id="hackathons" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-16">Hackathons</h1>
          
          <div className="max-w-3xl mx-auto space-y-8">
            {hackathons.map((hackathon, index) => (
              <HackathonCard key={index} hackathon={hackathon} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-5xl font-bold text-center mb-16">Get In Touch</h1>
          
          <div className="max-w-2xl mx-auto glass bg-white/5 border border-white/10 rounded-2xl p-8 form-shadow">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-accent to-accent2 text-dark font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
            
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent to-accent2 flex items-center justify-center">
                    <i className="fas fa-envelope text-dark"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email me at</p>
                    <a href="mailto:aniketgosavi471@gmail.com" className="text-white hover:text-accent transition">
                      aniketgosavi471@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Aniket Gosavi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;