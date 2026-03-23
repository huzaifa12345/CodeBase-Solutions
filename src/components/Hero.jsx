import { motion } from 'framer-motion';

const Hero = () => (
  <section className="pt-48 pb-24 px-6 bg-gradient-to-b from-amber-50/30 to-white overflow-hidden">
    <div className="max-w-5xl mx-auto text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Badge */}
        <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border border-amber-200/50">
          Scalable Software for Modern Business
        </span>
        
        {/* Heading - Size reduced from 8xl to 7xl (Desktop) and 6xl (Tablet) */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-950 leading-[1.1] mb-8 tracking-tight">
          Accelerate Your Growth with <br />
          <span className="relative inline-block text-amber-600">
            Custom Products
            <span className="absolute bottom-2 left-0 w-full h-3 bg-amber-100/80 -z-10 rounded-full"></span>
          </span>
        </h1>

        {/* Paragraph */}
        <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
          We don't just write code. We build business assets that automate your 
          workflow and drive revenue.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a href="#solutions" className="w-full sm:w-auto bg-amber-600 text-white px-10 py-4.5 rounded-2xl font-extrabold hover:bg-amber-700 transition-all shadow-xl shadow-amber-200/50 active:scale-95">
            Explore Solutions
          </a>
          <button className="w-full sm:w-auto bg-slate-950 text-white px-10 py-4.5 rounded-2xl font-extrabold hover:bg-slate-800 transition-all shadow-lg active:scale-95">
            Our Process
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-30 grayscale tracking-[0.3em]">
           <span className="text-[10px] font-black text-slate-900 uppercase">ERP Systems</span>
           <span className="text-[10px] font-black text-slate-900 uppercase">E-Commerce</span>
           <span className="text-[10px] font-black text-slate-900 uppercase">Custom Dashboards</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;