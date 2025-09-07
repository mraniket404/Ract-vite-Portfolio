export default function Hackathons() {
    const hackathons = [
      { name: "Smart India Hackathon", result: "Winner" },
      { name: "NASA Space Apps", result: "Finalist" },
      { name: "Local Hack Day", result: "Mentor" },
    ];
  
    return (
      <section id="hackathons" className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-6">Hackathons</h2>
        <ul className="space-y-4">
          {hackathons.map((h, i) => (
            <li key={i} className="px-6 py-4 bg-white/10 rounded-xl shadow-md">
              <span className="font-semibold">{h.name}</span> — {h.result}
            </li>
          ))}
        </ul>
      </section>
    );
  }
  