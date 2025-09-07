const HackathonCard = ({ hackathon }) => {
  return (
    <div className="relative pl-8">
      <span className="absolute left-0 top-1 inline-flex w-4 h-4 rounded-full bg-gradient-to-br from-accent to-accent2"></span>
      <div className="glass bg-white/5 border border-white/10 rounded-2xl p-5">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-lg font-semibold">{hackathon.title}</h3>
          <span className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10">{hackathon.year}</span>
        </div>
        <p className="text-white/80 text-sm mt-1">{hackathon.role}</p>
        <p className="text-white/70 text-sm mt-2">{hackathon.details}</p>
        <a className="mt-2 inline-block underline decoration-dotted text-sm" href={hackathon.link} target="_blank" rel="noreferrer">
          View
        </a>
      </div>
    </div>
  );
};

export default HackathonCard;