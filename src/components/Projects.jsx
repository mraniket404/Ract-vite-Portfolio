export default function Projects() {
    const projects = [
      { title: "EcoCart", desc: "Sustainable Shopping Assistant." },
      { title: "HeartWise", desc: "Heart health emergency support system." },
      { title: "Change Detection", desc: "Satellite-based monitoring." },
    ];
  
    return (
      <section id="projects" className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>
        <div className="grid gap-6 md:grid-cols-3 w-full max-w-5xl">
          {projects.map((p, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/10 shadow-lg hover:scale-105 transition">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-sm mt-2">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  