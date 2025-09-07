const ProjectCard = ({ project }) => {
  return (
    <div className="group relative glass bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-xl">
      {/* Image with gradient overlay */}
      <div className="h-48 overflow-hidden relative">
        <img 
          src={project.img} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white drop-shadow-lg">{project.title}</h3>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5">
        <p className="text-sm text-white/80 mb-4">{project.desc}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="text-xs px-2.5 py-1 rounded-full bg-white/10 border border-white/10">
              {tag}
            </span>
          ))}
        </div>
        
        {/* Buttons */}
        <div className="flex gap-3">
          <a href={project.link} target="_blank" rel="noreferrer" className="flex-1 text-center px-3 py-2 text-sm rounded-lg bg-white/10 border border-white/10 hover:bg-white/20 transition-colors">
            Live Demo
          </a>
          <a href={project.repo} target="_blank" rel="noreferrer" className="flex-1 text-center px-3 py-2 text-sm rounded-lg bg-gradient-to-r from-accent/80 to-accent2/80 text-dark font-medium hover:opacity-90 transition-opacity">
            Source Code
          </a>
        </div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{boxShadow: '0 0 0 1px rgba(85,230,193,0.3), 0 0 30px rgba(85,230,193,0.1)'}}></div>
    </div>
  );
};

export default ProjectCard;