import { MessageCircle } from 'lucide-react';

const Navbar = () => {
  // Aap apna number yahan international format mein likhein (e.g., 923001234567)
  const whatsappNumber = "923390047304"; 
  const message = encodeURIComponent("Hi Codebase Solutions, I'm interested in discussing a custom project.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
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
            <a href="#contact" className="hover:text-amber-600 transition-colors">CONTACT</a>
          </div>
          
          {/* WhatsApp Direct Link Button */}
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-950 text-white px-7 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-[#25D366] transition-all shadow-xl shadow-slate-200 active:scale-95 flex items-center gap-2.5"
          >
            <MessageCircle size={16} fill="currentColor" className="text-white" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;