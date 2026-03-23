import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ project }) => (
  <div className="group bg-white border border-slate-100 rounded-[2.5rem] p-5 hover:shadow-2xl hover:shadow-amber-100/40 transition-all duration-500 hover:-translate-y-2">
    
    {/* Image Container with Hover Zoom and Grayscale Effect */}
    <div className="h-64 rounded-[2rem] overflow-hidden mb-6 relative">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale-[0.3] group-hover:grayscale-0" 
      />
      {/* Dark overlay on hover for better focus */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>

    <div className="px-2">
      <div className="flex justify-between items-start mb-4">
        <div>
          {/* Industry Category Badge */}
          <span className="text-[10px] font-black text-amber-600 bg-amber-50 px-3 py-1.5 rounded-full uppercase tracking-widest border border-amber-100/50">
            {project.category}
          </span>
          <h3 className="text-2xl font-black text-slate-900 mt-4 tracking-tight group-hover:text-amber-600 transition-colors">
            {project.title}
          </h3>
        </div>
        
        {/* Aesthetic Arrow Link */}
        <Link 
          to={`/product/${project.id}`} 
          className="bg-slate-50 p-3.5 rounded-2xl text-slate-400 group-hover:bg-amber-600 group-hover:text-white transition-all shadow-sm"
        >
          <ArrowUpRight size={20} />
        </Link>
      </div>

      {/* General Purpose Description */}
      <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium line-clamp-2">
        {project.description}
      </p>

      {/* Feature Tags with Gold Icons */}
      <div className="grid grid-cols-2 gap-y-3 mb-10">
        {project.tags.slice(0, 4).map(tag => (
          <div key={tag} className="flex items-center gap-2.5 text-slate-700 font-bold text-[11px] uppercase tracking-wide">
            <CheckCircle2 size={15} className="text-amber-500 shrink-0" />
            {tag}
          </div>
        ))}
      </div>

      {/* Main CTA Button linking to Case Study/Detail Page */}
      <Link 
        to={`/product/${project.id}`} 
        className="block w-full text-center py-4.5 bg-slate-950 text-white rounded-[1.25rem] font-black text-[11px] uppercase tracking-[0.2em] group-hover:bg-amber-600 transition-all shadow-xl shadow-slate-200 group-hover:shadow-amber-200/50 active:scale-95"
      >
        View Solution Details
      </Link>
    </div>
  </div>
);

export default ProductCard;