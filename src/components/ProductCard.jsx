import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ project }) => (
  <div className="group bg-white border border-slate-100 rounded-[2.5rem] p-5 hover:shadow-2xl hover:shadow-amber-100/40 transition-all duration-500 hover:-translate-y-2">
    
    {/* Image Container - Fixed for Circular Diagrams */}
    <div className="h-72 rounded-[2rem] overflow-hidden mb-6 relative bg-white border border-slate-100 flex items-center justify-center">
      <img 
        src={project.image} 
        alt={project.title} 
        /* 1. object-contain: Circular diagram ke liye best hai taake kuch bhi cut na ho.
          2. p-2: Thori si padding taake image neechy se frame ke saath touch na kare.
          3. transition-transform: Hover par smooth zoom.
        */
        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" 
      />
      
      {/* Subtle Shadow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>

    <div className="px-2">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-[10px] font-black text-amber-600 bg-amber-50 px-3 py-1.5 rounded-full uppercase tracking-widest border border-amber-100/50">
            {project.category}
          </span>
          <h3 className="text-2xl font-black text-slate-900 mt-4 tracking-tight group-hover:text-amber-600 transition-colors">
            {project.title}
          </h3>
        </div>
        
        <Link 
          to={`/product/${project.id}`} 
          className="bg-slate-50 p-3.5 rounded-2xl text-slate-400 group-hover:bg-amber-600 group-hover:text-white transition-all shadow-sm shrink-0"
        >
          <ArrowUpRight size={20} />
        </Link>
      </div>

      <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium line-clamp-2">
        {project.description}
      </p>

      {/* Feature Tags */}
      <div className="grid grid-cols-2 gap-y-3 mb-10">
        {project.tags.slice(0, 4).map(tag => (
          <div key={tag} className="flex items-center gap-2.5 text-slate-700 font-bold text-[11px] uppercase tracking-wide">
            <CheckCircle2 size={15} className="text-amber-500 shrink-0" />
            <span className="line-clamp-1">{tag}</span>
          </div>
        ))}
      </div>

      {/* Main Button */}
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