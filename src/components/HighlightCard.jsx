const HighlightCard = ({ highlight }) => {
  return (
    <div className="glass bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/7 transition">
      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d={highlight.icon} />
        </svg>
      </div>
      <h3 className="mt-3 font-semibold">{highlight.title}</h3>
      <p className="text-sm text-white/70">{highlight.note}</p>
    </div>
  );
};

export default HighlightCard;