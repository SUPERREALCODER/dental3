/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  ChevronRight, 
  ShieldCheck, 
  UserCheck, 
  Award, 
  Stethoscope, 
  Menu, 
  X,
  Sparkles,
  Zap,
  Activity,
  Heart,
  Smile,
  Instagram,
  Facebook,
  Linkedin
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Specialist', href: '#doctor' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-brand-600 rounded-sm flex items-center justify-center rotate-45 group hover:rotate-[225deg] transition-transform duration-500">
            <div className="w-3 h-3 bg-white -rotate-45"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl tracking-tighter text-slate-900 uppercase">
              Aura <span className="font-light text-brand-600">Dental</span>
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-brand-600 transition-colors">
              {link.name}
            </a>
          ))}
          <a 
            href="#book" 
            className="bg-brand-600 text-white px-8 py-3 rounded-none hover:bg-brand-900 transition-all text-xs font-bold uppercase tracking-widest shadow-sm active:scale-95"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-900">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-white border-b border-slate-100 p-8 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-8 text-center bg-white">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-sm font-bold uppercase tracking-widest text-slate-900"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#book" 
                className="bg-slate-900 text-white py-5 rounded-none font-bold uppercase tracking-[0.2em] text-xs"
                onClick={() => setIsOpen(false)}
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ children, badge, centered = false, light = false }: { children: React.ReactNode, badge?: string, centered?: boolean, light?: boolean }) => (
  <div className={`mb-12 ${centered ? 'text-center mx-auto' : ''}`}>
    {badge && (
      <span className={`geometric-label mb-4 block ${light ? 'text-brand-200' : ''}`}>
        {badge}
      </span>
    )}
    <h2 className={`text-4xl md:text-5xl font-light leading-[1.1] ${light ? 'text-white' : 'text-slate-900'}`}>
      {children}
    </h2>
  </div>
);

const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="p-10 bg-white border border-slate-100 rounded-none hover:border-brand-600 transition-all group flex flex-col h-full">
    <div className="w-12 h-12 bg-slate-50 text-slate-400 rounded-none flex items-center justify-center mb-8 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
      <Icon size={24} />
    </div>
    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed font-light">{description}</p>
    <div className="mt-auto pt-8">
      <ChevronRight className="text-brand-600 group-hover:translate-x-2 transition-transform" size={16} />
    </div>
  </div>
);

export default function App() {
  const services = [
    { icon: Sparkles, title: "Dental Implants", description: "Restore your smile permanently with our high-precision titanium implants." },
    { icon: Activity, title: "Root Canal Treatment", description: "Advanced, pain-free microscopic RCT procedures for maximum precision." },
    { icon: Heart, title: "Cosmetic Dentistry", description: "Redesign your smile with expert smile correction and digital smile design." },
    { icon: Zap, title: "Teeth Whitening", description: "Get a laser-bright smile in a single session with our safe whitening kits." },
    { icon: ShieldCheck, title: "Braces / Aligners", description: "Clear aligners and modern braces for perfectly aligned teeth at any age." },
    { icon: Stethoscope, title: "General Dentistry", description: "Complete preventative care including cleanings, fillings, and checkups." },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row bg-slate-100 gap-px border-x border-slate-100">
          <motion.div 
            className="md:w-7/12 bg-white p-10 md:p-20 flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="geometric-label mb-6 block">Newtown, Kolkata</span>
            <h1 className="text-5xl md:text-7xl font-light text-slate-900 leading-[1.1] mb-8 italic">
              Your Smile, <br />
              Our <span className="font-bold not-italic border-b-8 border-brand-50">Priority.</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed mb-12 font-light max-w-lg">
              Experience advanced dental care with precision and compassion. Our high-end clinic combines medical expertise with state-of-the-art technology for a pain-free experience.
            </p>
            
            <div className="flex flex-wrap gap-12 pt-12 border-t border-slate-50">
              <div className="flex flex-col gap-1">
                <span className="text-brand-600 text-3xl font-bold italic">15+</span>
                <span className="geometric-label text-[10px]">Years Exp.</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-brand-600 text-3xl font-bold italic">10k+</span>
                <span className="geometric-label text-[10px]">Happy Smiles</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-brand-600 text-3xl font-bold italic">100%</span>
                <span className="geometric-label text-[10px]">Sterilized</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="md:w-5/12 bg-slate-50 p-10 md:p-14 flex flex-col justify-center items-center relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-full max-w-sm bg-white p-10 border border-slate-200 shadow-2xl shadow-slate-200/50 relative z-10">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-8 border-l-4 border-brand-600 pl-4">Reservation</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="geometric-label text-[10px] mb-2 block">Full Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-100 p-4 focus:outline-none focus:border-brand-600 text-sm font-medium" placeholder="Ex: Rahul Sen" />
                </div>
                <div>
                  <label className="geometric-label text-[10px] mb-2 block">Phone Number</label>
                  <input type="tel" className="w-full bg-slate-50 border border-slate-100 p-4 focus:outline-none focus:border-brand-600 text-sm font-medium" placeholder="+91" />
                </div>
                <button className="w-full mt-4 py-5 bg-slate-900 text-white text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-brand-600 transition-all shadow-xl shadow-brand-900/10 active:scale-95">
                  Confirm Booking
                </button>
              </form>
            </div>
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square bg-white rounded-full opacity-50 blur-3xl"></div>
          </motion.div>
        </div>

        {/* Services Bar */}
        <div className="max-w-7xl mx-auto h-32 bg-white border-x border-slate-100 hidden md:flex items-center px-12 gap-12 overflow-hidden">
          <span className="vertical-label whitespace-nowrap">Specializations</span>
          <div className="flex-1 grid grid-cols-6 gap-8">
            {['Implants', 'Root Canal', 'Whitening', 'Aligners', 'Cosmetic', 'Checkup'].map((item) => (
              <div key={item} className="flex flex-col gap-1.5 group cursor-default">
                <span className="text-[11px] font-bold uppercase tracking-widest text-slate-900 group-hover:text-brand-600 transition-colors">{item}</span>
                <span className="text-[10px] text-slate-400 leading-none font-medium">Expert Care</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES TILES --- */}
      <section id="services" className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading badge="Precise Care Solutions" centered>
            Advanced Dentistry <br /> <span className="font-bold italic">Standardized.</span>
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ABOUT --- */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div className="md:w-1/2 relative">
              <div className="aspect-square bg-slate-50 border border-slate-100 p-8">
                <div className="w-full h-full bg-slate-200"></div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-600 text-white p-8 flex flex-col justify-end hidden md:flex">
                <span className="text-4xl font-bold italic mb-1">100%</span>
                <span className="geometric-label text-white text-[10px]">Safety First</span>
              </div>
            </div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionHeading badge="The Aura Standard">
                Swiss Expertise <br /> in the heart of Kolkata
              </SectionHeading>
              <p className="text-slate-500 mb-8 leading-relaxed font-light text-lg">
                At Aura Dental & Implant Care, we believe everyone deserves a confident smile. Our clinic is a sanctuary of precision, where noiseless workflows and clinical excellence meet patient comfort.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-100 border border-slate-100">
                <div className="bg-white p-8">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-3">Hygiene DNA</h4>
                  <p className="text-[13px] text-slate-500 font-light leading-relaxed">International Class-B sterilization standards for 100% safety.</p>
                </div>
                <div className="bg-white p-8">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-3">Digital Flow</h4>
                  <p className="text-[13px] text-slate-500 font-light leading-relaxed">AI-guided diagnostics and digital smile design for accurate results.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section id="why-us" className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="bg-brand-900 rounded-[3rem] px-8 py-16 md:p-16 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-96 h-96 border-[40px] border-white rounded-full translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <div className="relative z-10">
              <SectionHeading badge="Why Our Patients Love Us">
                <span className="text-white">Setting Global Standards <br />In Patient Satisfaction</span>
              </SectionHeading>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-16">
                {[
                  { icon: ShieldCheck, title: "5-Step Hygiene", desc: "Highest protocols in sterilization." },
                  { icon: Zap, title: "Modern Tech", desc: "Intraoral scanners & digital X-rays." },
                  { icon: Smile, title: "Painless RCT", desc: "Expert techniques for comfort." },
                  { icon: Clock, title: "Zero Wait Time", desc: "Strict adherence to appointments." }
                ].map((item) => (
                  <div key={item.title}>
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 border border-white/10">
                      <item.icon size={24} className="text-brand-200" />
                    </div>
                    <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                    <p className="text-brand-200 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- DOCTOR SECTION --- */}
      <section id="doctor" className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <motion.div 
              className="md:w-5/12 bg-slate-50 p-6 border border-slate-100"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="bg-slate-200 aspect-[4/5]"></div>
            </motion.div>
            <div className="md:w-7/12">
              <SectionHeading badge="Principal Specialist">
                Dr. Ananya Roy <br />
                <span className="font-bold italic text-brand-600">Prosthodontics & Implants</span>
              </SectionHeading>
              <div className="space-y-8">
                <p className="text-slate-500 leading-relaxed font-light text-lg">
                  With over 12 years of experience in Prosthodontics and Implantology, Dr. Roy leads with a philosophy centered on precision and transparency.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['Certified Implantologist', 'Member, IDA & DCI', 'Digital Smile Specialist', '12+ Years Experience'].map(skill => (
                    <div key={skill} className="flex items-center gap-3 p-4 border border-slate-100 bg-slate-50/50">
                      <div className="w-1.5 h-1.5 bg-brand-600 rotate-45"></div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-24 bg-slate-50 overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading badge="Integrity & Feedback" centered>
            What Patients <span className="italic font-bold">Say.</span>
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              { name: "Rahul Sharma", role: "Patient", review: "The most noiseless and calming dental clinic I've ever visited. Dr. Roy explained the procedure thoroughly. Pain-free experience." },
              { name: "Priyanka Sen", role: "Patient", review: "Truly redefined my smile. Their clear aligner treatment was seamless and far more affordable than I expected. Professional standards." }
            ].map((item, idx) => (
              <motion.div 
                key={item.name} 
                className="bg-white p-10 border border-slate-200 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <Smile size={80} />
                </div>
                <p className="text-slate-600 italic mb-8 leading-relaxed font-light text-lg">"{item.review}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-100 flex items-center justify-center font-bold text-slate-400 text-xs">
                    {item.name[0]}
                  </div>
                  <div>
                    <h5 className="text-[11px] font-bold uppercase tracking-widest text-slate-900">{item.name}</h5>
                    <p className="text-[10px] text-brand-600 font-bold uppercase tracking-widest">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT & FOOTER --- */}
      <footer id="contact" className="bg-slate-900 text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 pb-20 border-b border-slate-800">
            <div className="col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-6 h-6 bg-brand-600 rounded-sm flex items-center justify-center rotate-45">
                  <div className="w-2.5 h-2.5 bg-white -rotate-45"></div>
                </div>
                <span className="font-bold text-xl uppercase tracking-widest">Aura Dental</span>
              </div>
              <p className="text-slate-400 font-light leading-relaxed mb-8">
                Suite 204, Global Plaza, Newtown Action Area 1, Kolkata 700156
              </p>
              <div className="flex gap-4">
                {[Instagram, Facebook, Linkedin].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-10 h-10 bg-slate-800 flex items-center justify-center hover:bg-brand-600 transition-colors">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div className="col-span-1 grid grid-cols-2 gap-8">
              <div>
                <h5 className="geometric-label text-slate-500 mb-6 font-bold">Services</h5>
                <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                  <li><a href="#" className="hover:text-brand-600">Implants</a></li>
                  <li><a href="#" className="hover:text-brand-600">Root Canal</a></li>
                  <li><a href="#" className="hover:text-brand-600">Cosmetic</a></li>
                  <li><a href="#" className="hover:text-brand-600">Aligners</a></li>
                </ul>
              </div>
              <div>
                <h5 className="geometric-label text-slate-500 mb-6 font-bold">Contact</h5>
                <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                  <li>+91 33 2987 6543</li>
                  <li>aura@dental.info</li>
                  <li>@auradentalcare</li>
                </ul>
              </div>
            </div>

            <div className="col-span-1">
              <div className="p-8 bg-slate-800/50 border border-slate-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="geometric-label text-white tracking-widest">Clinic Open Now</span>
                </div>
                <p className="text-xl font-bold italic mb-6">Mon - Sat <br /> 10 AM - 8 PM</p>
                <a href="#book" className="block text-center py-4 bg-brand-600 text-white text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-slate-900 transition-all">
                  Book Visit
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500">
              © 2026 Aura Dental. Action Area I, Newtown, Kolkata.
            </p>
            <div className="flex gap-8 text-[10px] uppercase font-black tracking-widest text-slate-500">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
