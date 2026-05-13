import { Link } from 'react-router-dom';
import { projects } from '../data/projects'; // Apne data file ka path check kar lein

const Footer = () => (
  <footer className="bg-slate-950 py-16 px-6 mt-20">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
        
        {/* Brand Info */}
        <div className="max-w-sm">
          <div className="text-2xl font-black tracking-tighter text-white uppercase mb-6">
            CODEBASE <span className="text-amber-500 italic">SOLUTIONS</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed font-medium mb-6">
            Engineering high-performance digital assets for industrial and retail enterprises worldwide. 
            We turn complex logic into scalable business engines.
          </p>
          <div className="space-y-2">
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Direct Line</p>
            <p className="text-amber-500 font-bold text-sm">+92 339 0047304</p>
          </div>
        </div>

        {/* Dynamic Solutions & Quick Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
          
          {/* DYNAMIC SOLUTIONS LINK */}
          <div>
            <h4 className="text-amber-500 font-black text-xs uppercase tracking-[0.2em] mb-6">Solutions</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-300">
              {projects.slice(0, 4).map((project) => (
                <li key={project.id}>
                  <Link 
                    to={`/product/${project.id}`} 
                    className="hover:text-white transition-colors block"
                  >
                    {project.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-amber-500 font-black text-xs uppercase tracking-[0.2em] mb-6">Company</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-300">
              <li><a href="#services" className="hover:text-white transition-colors">Our Process</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-500 text-[11px] font-bold tracking-widest uppercase text-center md:text-left">
          © 2026 Codebase Solutions. <br className="md:hidden" /> Built for Excellence.
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
            <a href="https://wa.me/923390047304" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-green-500 text-[11px] font-black uppercase tracking-widest transition-colors">
              WhatsApp
            </a>
            <a href="https://www.instagram.com/codebase_solutions/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-amber-500 text-[11px] font-black uppercase tracking-widest transition-colors">
              Instagram
            </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;