import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { 
  ArrowLeft, CheckCircle2, Settings2, 
  Layers, ShieldCheck, Zap, Monitor, Smartphone
} from 'lucide-react';
import { useEffect } from 'react';

const ProductDetail = () => {
  const { id } = useParams();
  
  const project = projects.find((p) => String(p.id) === String(id));

  useEffect(() => { 
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  }, [id]);

  if (!project) return (
    <div className="pt-40 pb-40 text-center">
      <h2 className="text-3xl font-black text-slate-900">Solution Not Found</h2>
      <Link to="/" className="text-amber-600 font-bold mt-4 inline-block hover:underline">
        Return to Dashboard
      </Link>
    </div>
  );

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Navigation */}
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-600 font-black text-[10px] tracking-[0.2em] mb-12 transition-all group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> BACK TO SOLUTIONS
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT SIDE: Media & Technical Stack */}
          <div className="lg:sticky lg:top-32">
            <div className="rounded-[3rem] overflow-hidden border border-slate-100 shadow-2xl shadow-amber-100/20 mb-8 bg-slate-50">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto object-cover min-h-[400px] hover:scale-105 transition-transform duration-700" 
              />
            </div>

            {/* Support Card */}
            <div className="p-8 rounded-[2.5rem] bg-slate-950 text-white relative overflow-hidden mb-8">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-600/10 rounded-full blur-3xl"></div>
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="bg-amber-600 p-2 rounded-lg text-white">
                  <ShieldCheck size={20} />
                </div>
                <h4 className="text-white font-black uppercase text-xs tracking-widest">Enterprise Support</h4>
              </div>
              <p className="text-slate-400 text-sm font-medium leading-relaxed relative z-10">
                {project.supportMessage || "24/7 technical assistance included."}
              </p>
            </div>

            {/* Technology Chips */}
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((tech) => (
                <span key={tech} className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-black text-slate-500 uppercase">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Content & Modules */}
          <div className="py-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-black uppercase tracking-widest mb-6 border border-amber-100">
              {project.category}
            </span>
            
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
              {project.title}
            </h1>
            
            <div className="space-y-6 mb-12">
               <p className="text-slate-600 text-xl font-bold leading-relaxed italic border-l-4 border-amber-500 pl-6">
                 "{project.challenge}"
               </p>
               <p className="text-slate-500 text-lg leading-relaxed font-medium">
                 {project.fullDescription}
               </p>
            </div>

            {/* CORE MODULES */}
            {project.modules && (
              <div className="mb-12">
                <h3 className="text-xl font-black text-slate-900 mb-8 uppercase tracking-tight flex items-center gap-3">
                  <Settings2 className="text-amber-600" /> Core System Modules
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.modules.map((module, i) => (
                    <div key={i} className="p-6 rounded-3xl bg-slate-50 border border-slate-100 group hover:border-amber-200 hover:bg-white transition-all shadow-sm hover:shadow-md">
                      <div className="text-amber-600 mb-3">
                        <Layers size={20} />
                      </div>
                      <h4 className="font-black text-slate-900 text-sm mb-1">{module.title}</h4>
                      <p className="text-slate-500 text-xs font-bold leading-relaxed">{module.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* KEY CAPABILITIES */}
            <div className="mb-12">
              <h3 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">Key Capabilities</h3>
              <div className="space-y-3">
                {project.results.map((result, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:translate-x-1 transition-transform">
                    <CheckCircle2 size={18} className="text-amber-600 shrink-0" />
                    <span className="font-bold text-slate-700 text-sm">{result}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ACTION BUTTONS */}
           {/* ACTION BUTTONS - Dynamically Updated */}
<div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-slate-100">
  {project.demoUrl ? (
    <a 
      href={project.demoUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex-1 bg-amber-600 text-white px-8 py-5 rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-amber-700 transition-all shadow-xl shadow-amber-200 active:scale-95 flex items-center justify-center gap-2"
    >
      <Zap size={16} fill="currentColor" /> Live Demo
    </a>
  ) : (
    <button 
      disabled
      className="flex-1 bg-slate-100 text-slate-400 px-8 py-5 rounded-2xl font-black text-[11px] uppercase tracking-widest cursor-not-allowed flex items-center justify-center gap-2"
    >
      Demo Coming Soon
    </button>
  )}
  
  {/* Aap yahan ek secondary button bhi rakh sakte hain Contact ke liye */}
  <Link 
    to="/#contact" 
    className="flex-1 bg-white border-2 border-slate-900 text-slate-900 px-8 py-5 rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center gap-2"
  >
    Get Started
  </Link>
</div>
          </div>
        </div>

        {/* --- NEW SYSTEM SCREENSHOTS SECTION --- */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="mt-32 pt-20 border-t border-slate-100">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
              <div className="max-w-xl">
                <h4 className="text-amber-600 font-black text-xs uppercase tracking-[0.3em] mb-4">Interface Preview</h4>
                <h2 className="text-4xl font-black text-slate-900 tracking-tighter">System <span className="italic text-slate-400">Screenshots</span></h2>
                <p className="text-slate-500 mt-4 font-medium">Take a look inside the architecture. Clean interfaces designed for complex data management and high-performance workflows.</p>
              </div>
              <div className="flex gap-4">
                 <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <Monitor size={14} /> Desktop Optimized
                 </div>
                 <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <Smartphone size={14} /> Mobile Ready
                 </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.screenshots.map((ss, index) => (
                <div key={index} className="group relative rounded-[2.5rem] overflow-hidden bg-slate-100 border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500">
                  <img 
                    src={ss} 
                    alt={`${project.title} Interface ${index + 1}`} 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  {/* Subtle Overlay on Hover */}
                  <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;