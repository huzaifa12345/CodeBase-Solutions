import React, { useState } from 'react';
import { Mail, Phone, Send, Clock } from 'lucide-react';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Your Access Key
    formData.append("access_key", "111bda1d-62e0-40ca-af08-51f7643607df");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Contact Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-black uppercase tracking-[0.2em] border border-amber-100">
                Get In Touch
              </span>
              <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-900 text-white text-[10px] font-bold uppercase tracking-wider">
                <Clock size={12} className="text-amber-500" /> Reply within 24 Hours
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">
              Ready to Build Your <br />
              <span className="text-amber-600">Next Digital Asset?</span>
            </h2>
            <p className="text-slate-500 font-medium mb-12 max-w-md leading-relaxed">
              Have a project in mind? Drop us a message and let's engineer something great together.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="bg-slate-950 p-4 rounded-2xl text-amber-500 group-hover:bg-amber-600 group-hover:text-white transition-all shadow-xl shadow-slate-200">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Email Us</p>
                  <p className="text-lg font-bold text-slate-900">codebasesolutions.info@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="bg-slate-950 p-4 rounded-2xl text-amber-500 group-hover:bg-amber-600 group-hover:text-white transition-all shadow-xl shadow-slate-200">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Contact Us</p>
                  <p className="text-lg font-bold text-slate-900">+92 339 0047304</p>
                </div>
              </div>

              {/* <div className="flex items-center gap-6 group">
                <div className="bg-slate-950 p-4 rounded-2xl text-amber-500 group-hover:bg-amber-600 group-hover:text-white transition-all shadow-xl shadow-slate-200">
                  <svg viewBox="0 0 448 512" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-117zm-157 338.7h-.1c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.6-30.6-37.9-3.2-5.3-.3-8.1 2.4-11 2.5-2.6 5.5-6.9 8.3-10.3 2.8-3.4 3.7-5.8 5.5-9.7 1.9-3.9.9-7.4-.5-10.3-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">WhatsApp</p>
                  <p className="text-lg font-bold text-slate-900">+92 339 0047304</p>
                </div>
              </div> */}
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-100/50">
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider ml-1">Full Name</label>
                  <input name="name" required type="text" className="w-full bg-white border border-slate-200 p-4 rounded-2xl outline-none focus:border-amber-500 transition-colors font-medium text-slate-900" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider ml-1">Email Address</label>
                  <input name="email" required type="email" className="w-full bg-white border border-slate-200 p-4 rounded-2xl outline-none focus:border-amber-500 transition-colors font-medium text-slate-900" placeholder="your email" />
                </div>
              </div>
              
              {/* Added Client Phone Number Field */}
              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider ml-1">Your Phone Number</label>
                <input name="phone" required type="tel" className="w-full bg-white border border-slate-200 p-4 rounded-2xl outline-none focus:border-amber-500 transition-colors font-medium text-slate-900" placeholder="+92 XXX XXXXXXX" />
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider ml-1">Project Type</label>
                <select name="project_type" className="w-full bg-white border border-slate-200 p-4 rounded-2xl outline-none focus:border-amber-500 transition-colors font-medium text-slate-900 appearance-none">
                  <option>ERP System For My Business</option>
                  <option>E-Commerce Platform</option>
                  <option>Custom SaaS</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider ml-1">Message</label>
                <textarea name="message" required rows="4" className="w-full bg-white border border-slate-200 p-4 rounded-2xl outline-none focus:border-amber-500 transition-colors font-medium text-slate-900" placeholder="Tell us about your project..."></textarea>
              </div>

              <button type="submit" className="w-full bg-amber-600 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-amber-700 transition-all shadow-xl shadow-amber-200 flex items-center justify-center gap-3 active:scale-95">
                {result ? result : "Send Message"} <Send size={16} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;