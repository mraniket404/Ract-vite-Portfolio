export default function Highlights() {
    const highlights = [
      "5+ Major Projects",
      "3 Hackathon Wins",
      "Open Source Contributor",
      "MERN Stack Developer",
    ];
  
    return (
      <section id="about" className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-6">Highlights</h2>
        <ul className="grid gap-4 md:grid-cols-2">
          {highlights.map((item, i) => (
            <li key={i} className="px-6 py-4 bg-white/10 rounded-xl shadow-md">
              {item}
            </li>
          ))}
        </ul>
      </section>
    );
  }
  