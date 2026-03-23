const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center">
        <span className="text-xl font-black tracking-tighter text-slate-900 uppercase">
          CODEBASE <span className="text-amber-600 font-extrabold italic">SOLUTIONS</span>
        </span>
      </div>

      <div className="hidden md:flex items-center gap-10">
        <div className="flex items-center gap-8 font-bold text-[13px] tracking-wide text-slate-500">
          <a href="#solutions" className="hover:text-amber-600 transition-colors">SOLUTIONS</a>
          <a href="#services" className="hover:text-amber-600 transition-colors">SERVICES</a>
          <a href="#contact" className="hover:text-amber-600 transition-colors">CONTACT</a>
        </div>
        <button className="bg-slate-950 text-white px-7 py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-amber-600 transition-all shadow-lg">
          Get a Quote
        </button>
      </div>
    </div>
  </nav>
);
export default Navbar;