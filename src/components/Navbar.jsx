import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-7xl">
      <nav className="glass bg-white/10 border border-white/10 rounded-2xl px-5 py-3 shadow-glow">
        <div className="flex items-center justify-evenly p-4">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10"
            aria-label="Open Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              />
            </svg>
          </button>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-2 text-sm">
            <li>
              <a
                className="navlink px-3 py-2 rounded-full hover:bg-white/10"
                href="#home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="navlink px-3 py-2 rounded-full hover:bg-white/10"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="navlink px-3 py-2 rounded-full hover:bg-white/10"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="navlink px-3 py-2 rounded-full hover:bg-white/10"
                href="#hackathons"
              >
                Hackathons
              </a>
            </li>
            <li>
              <a
                className="navlink px-3 py-2 rounded-full hover:bg-white/10"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <ul className="md:hidden flex flex-col gap-1 mt-3">
            <li>
              <a
                className="navlink block px-3 py-2 rounded-lg hover:bg-white/10"
                href="#home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="navlink block px-3 py-2 rounded-lg hover:bg-white/10"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="navlink block px-3 py-2 rounded-lg hover:bg-white/10"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="navlink block px-3 py-2 rounded-lg hover:bg-white/10"
                href="#hackathons"
              >
                Hackathons
              </a>
            </li>
            <li>
              <a
                className="navlink block px-3 py-2 rounded-lg hover:bg-white/10"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
