import Navbar from "./components/Navbar";
import Typewriter from "./components/Typewriter";
import Projects from "./components/Projects";
import Hackathons from "./components/Hackathons";
import Highlights from "./components/Highlights";
import DownloadCV from "./components/DownloadCV";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#1a0f2e] to-[#3d1f5e] text-white">
      <Navbar />
      <section id="home" className="h-screen flex flex-col items-center justify-center">
        <Typewriter />
        <DownloadCV />
      </section>
      <Highlights />
      <Projects />
      <Hackathons />
      <section id="contact" className="min-h-screen flex items-center justify-center">
        <h2 className="text-4xl font-bold">Contact Me</h2>
      </section>
    </div>
  );
}
