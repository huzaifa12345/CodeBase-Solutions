const Footer = () => (
  <footer className="bg-slate-950 py-16 px-6 mt-20">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
        {/* Brand Info */}
        <div className="max-w-sm">
          <div className="text-2xl font-black tracking-tighter text-white uppercase mb-6">
            CODEBASE <span className="text-amber-500 italic">SOLUTIONS</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed font-medium">
            Engineering high-performance digital assets for industrial and retail enterprises worldwide. 
            We turn complex logic into scalable business engines.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
          <div>
            <h4 className="text-amber-500 font-black text-xs uppercase tracking-[0.2em] mb-6">Solutions</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">ERP Systems</a></li>
              <li><a href="#" className="hover:text-white transition-colors">E-Commerce</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom SaaS</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-amber-500 font-black text-xs uppercase tracking-[0.2em] mb-6">Company</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">Our Process</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-500 text-[11px] font-bold tracking-widest uppercase">
          © 2026 Codebase Solutions. Built for Excellence.
        </div>
        <div className="flex gap-8">
           {['LinkedIn', 'Upwork', 'Github'].map(platform => (
             <a key={platform} href="#" className="text-slate-400 hover:text-amber-500 text-[11px] font-black uppercase tracking-widest transition-colors">
               {platform}
             </a>
           ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;