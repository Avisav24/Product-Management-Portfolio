import Link from "next/link";
import Image from "next/image";
import logoSnabbit from "@/assets/logos/1.svg";
import logoPronto from "@/assets/logos/2.svg";
import logoOla from "@/assets/logos/3.svg";
import logoGradely from "@/assets/logos/4.svg";

export function Hero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
      
      {/* Left Column: Headlines and CTAs */}
      <div className="flex flex-col items-start pr-0 lg:pr-12 z-10 relative">
        <h1 className="type-display-xl mb-6">
          Meet your product partner
        </h1>
        
        <p className="type-title-md mb-8 text-[var(--body-strong)]">
          I&apos;m <span className="text-[var(--primary)] font-semibold">Abhinav Vats</span>, an aspiring Product Manager with a background in frontend development and UI/UX. I build student marketplaces, analyze supply-side friction, and design 90-day retention mechanics.
        </p>
        
        <div className="flex flex-wrap items-center gap-4">
          <Link href="#work" className="btn-primary">
            View selected work
          </Link>
          <Link href="#contact" className="text-link">
            Get in touch &rarr;
          </Link>
        </div>
      </div>

      {/* Right Column: Interactive Cards Cluster */}
      <div className="w-full relative h-[400px] lg:h-[450px] rounded-[24px] overflow-visible group mt-8 lg:mt-0">
        


        {/* Card 1: Gradely (Back Left) */}
        <div className="absolute top-[-5%] left-[0%] w-[220px] md:w-[240px] bg-white rounded-2xl shadow-xl border border-slate-100 p-5 transform -rotate-6 scale-90 opacity-80 group-hover:-translate-y-4 group-hover:-rotate-12 transition-all duration-700 ease-out z-10">
          <div className="flex items-center gap-2 mb-6">
            <div className="p-1.5 bg-blue-50 rounded-lg">
              <Image src={logoGradely} alt="Gradely" className="w-5 h-5 object-contain" />
            </div>
            <span className="font-bold text-slate-800 text-sm font-sans">Gradely</span>
          </div>
          <p className="text-xs text-slate-500 font-medium mb-1 font-sans">Total Revenue</p>
          <p className="text-2xl font-bold text-slate-900 mb-4 font-sans">₹26,000+</p>
          <div className="w-full h-12 rounded bg-gradient-to-t from-green-50 to-transparent border-b-2 border-green-400 relative">
             <svg className="absolute bottom-0 w-full h-full text-green-400" viewBox="0 0 100 30" preserveAspectRatio="none"><polyline fill="none" stroke="currentColor" strokeWidth="2" points="0,30 20,20 40,25 60,10 80,15 100,5" /></svg>
          </div>
        </div>

        {/* Card 2: Snabbit (Middle Left) */}
        <div className="absolute top-[15%] left-[10%] w-[230px] md:w-[250px] bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] border border-slate-100 p-5 transform -rotate-2 scale-95 group-hover:-translate-y-6 group-hover:-translate-x-2 transition-all duration-700 ease-out delay-75 z-20">
          <div className="flex items-center gap-2 mb-6">
            <Image src={logoSnabbit} alt="Snabbit" className="w-20 h-6 object-contain" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 leading-tight mb-2 font-sans">
            Book home services in <span className="text-orange-500">10 mins.</span>
          </h3>
          <p className="text-xs text-slate-500 font-medium mb-4 font-sans">Trusted. Verified. On time.</p>
          
          <div className="flex justify-between gap-2 mb-4 text-slate-500">
             <div className="flex flex-col items-center gap-2 flex-1">
                <div className="w-10 h-10 rounded-full border border-slate-200 bg-slate-50 flex items-center justify-center shadow-sm">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 21.5L8 16"/><path d="M17 3l4 4-8.5 8.5L8.5 11.5z"/><path d="M8.5 11.5L5 15l4 4 3.5-3.5"/></svg>
                </div>
             </div>
             <div className="flex flex-col items-center gap-2 flex-1">
                <div className="w-10 h-10 rounded-full border border-slate-200 bg-slate-50 flex items-center justify-center shadow-sm">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                </div>
             </div>
             <div className="flex flex-col items-center gap-2 flex-1">
                <div className="w-10 h-10 rounded-full border border-slate-200 bg-slate-50 flex items-center justify-center shadow-sm">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h16l-2 11H6L4 10z"/><path d="M16 10l-4-7-4 7"/></svg>
                </div>
             </div>
          </div>
          
          <button className="w-full py-2 bg-blue-600 text-white rounded-lg text-sm font-bold shadow-md font-sans">
            Book Now
          </button>
        </div>

        {/* Card 3: Ola (Bottom Right) */}
        <div className="absolute top-[40%] right-[0%] w-[220px] md:w-[240px] bg-white rounded-2xl shadow-xl border border-slate-100 p-5 transform rotate-6 scale-95 opacity-90 group-hover:-translate-y-2 group-hover:rotate-12 transition-all duration-700 ease-out delay-100 z-30">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <Image src={logoOla} alt="Ola" className="w-16 h-6 object-contain" />
            </div>
            <span className="text-slate-300 tracking-widest leading-none">•••</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 leading-tight mb-4 font-sans">
            Your daily commute, made <span className="text-green-600">reliable.</span>
          </h3>
          <div className="w-full h-24 bg-slate-100 rounded-lg relative overflow-hidden mb-3 border border-slate-200">
             {/* Map Mockup */}
             <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #94a3b8 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
             <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow z-10"></div>
             <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-slate-800 rounded-full border-2 border-white shadow z-10"></div>
             <svg className="absolute inset-0 w-full h-full text-blue-500 opacity-50" viewBox="0 0 100 100" preserveAspectRatio="none"><path fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="4 2" d="M 25 25 Q 50 25 50 50 T 75 75" /></svg>
          </div>
          <button className="w-full py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold font-sans">Book Ride</button>
        </div>

        {/* Card 4: Pronto (Center Top / Focus) */}
        <div className="absolute top-[-10%] right-[10%] md:right-[15%] w-[240px] md:w-[260px] bg-white rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] border border-slate-100 p-6 transform rotate-2 group-hover:-translate-y-8 group-hover:scale-105 transition-all duration-700 ease-out z-40">
          <div className="flex items-center gap-2 mb-5">
            <div className="p-1.5 bg-green-50 rounded-lg">
              <Image src={logoPronto} alt="Pronto" className="w-6 h-6 object-contain" />
            </div>
            <span className="font-bold text-slate-800 text-base font-sans">Pronto</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-4 font-sans">
            Find trusted professionals, <span className="text-green-600">instantly.</span>
          </h3>
          <div className="w-full h-12 rounded-xl border border-slate-200 bg-slate-50 flex items-center px-4 mb-5 gap-2 text-slate-400 shadow-sm inset-y-1">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <span className="text-sm font-sans font-medium">Search services...</span>
          </div>
          <div className="flex gap-3 text-slate-500 mb-6">
             <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-slate-100 transition-colors cursor-pointer">
               <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
             </div>
             <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-slate-100 transition-colors cursor-pointer">
               <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
             </div>
             <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-slate-100 transition-colors cursor-pointer">
               <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 21.5L8 16"/><path d="M17 3l4 4-8.5 8.5L8.5 11.5z"/><path d="M8.5 11.5L5 15l4 4 3.5-3.5"/></svg>
             </div>
          </div>
        </div>

      </div>
      
    </div>
  );
}
