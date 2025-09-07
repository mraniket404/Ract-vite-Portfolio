import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Scroll spy for active navigation
    const links = Array.from(document.querySelectorAll('.navlink'));
    const sections = links.map(a => document.querySelector(a.getAttribute('href')));
    
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = '#' + entry.target.id;
        const active = document.querySelectorAll(`a[href='${id}']`);
        if (entry.isIntersecting) {
          links.forEach(l => l.classList.remove('bg-white/10', 'text-white', 'font-semibold'));
          active.forEach(l => l.classList.add('bg-white/10', 'text-white', 'font-semibold'));
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    
    sections.forEach(sec => sec && io.observe(sec));

    return () => {
      sections.forEach(sec => sec && io.unobserve(sec));
    };
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <a href="#home" className="text-xl font-bold text-white">
              Portfolio
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="navlink px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition">
                Home
              </a>
              <a href="#about" className="navlink px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition">
                About
              </a>
              <a href="#projects" className="navlink px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition">
                Projects
              </a>
              <a href="#hackathons" className="navlink px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition">
                Hackathons
              </a>
              <a href="#contact" className="navlink px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition">
                Contact
              </a>
              <button id="nav_animation" onClick={() => window.open('https://drive.google.com/file/d/1GorDpLDKcodSWnEAaO64sxr24UJ1f4AZ/view?usp=sharing', '_blank')}>
                Download CV
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 border-t border-white/10">
            <a
              href="#home"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#hackathons"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Hackathons
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <button 
              id="nav_animation" 
              className="w-full mt-2 text-left px-3 py-2"
              onClick={() => {
                window.open('https://drive.google.com/file/d/1GorDpLDKcodSWnEAaO64sxr24UJ1f4AZ/view?usp=sharing', '_blank');
                setIsMenuOpen(false);
              }}
            >
              Download CV
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;