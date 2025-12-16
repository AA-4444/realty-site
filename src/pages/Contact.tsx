import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import RevealOnScroll from '@/components/RevealOnScroll';

const offices = [
  {
    city: 'New York',
    timezone: 'America/New_York',
    address: '432 Park Avenue, Suite 1800',
    phone: '+1 (212) 555-0123',
    email: 'newyork@estate.com',
  },
  {
    city: 'London',
    timezone: 'Europe/London',
    address: '30 St Mary Axe, Level 28',
    phone: '+44 20 7946 0958',
    email: 'london@estate.com',
  },
  {
    city: 'Dubai',
    timezone: 'Asia/Dubai',
    address: 'Burj Khalifa, Level 124',
    phone: '+971 4 555 0123',
    email: 'dubai@estate.com',
  },
  {
    city: 'Hong Kong',
    timezone: 'Asia/Hong_Kong',
    address: 'Two IFC, 88th Floor',
    phone: '+852 2123 4567',
    email: 'hongkong@estate.com',
  },
  {
    city: 'Paris',
    timezone: 'Europe/Paris',
    address: '8 Avenue Montaigne',
    phone: '+33 1 42 56 78 90',
    email: 'paris@estate.com',
  },
  {
    city: 'Miami',
    timezone: 'America/New_York',
    address: '1000 Brickell Avenue, Suite 4500',
    phone: '+1 (305) 555-0123',
    email: 'miami@estate.com',
  },
];

const fieldBase =
  'w-full px-0 bg-transparent border-b border-white/20 focus:border-white outline-none transition-colors text-body';

const Contact = () => {
  const [times, setTimes] = useState<Record<string, string>>({});

  useEffect(() => {
    const updateTimes = () => {
      const newTimes: Record<string, string> = {};
      offices.forEach((office) => {
        newTimes[office.city] = new Date().toLocaleTimeString('en-US', {
          timeZone: office.timezone,
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        });
      });
      setTimes(newTimes);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <PageHero title="CONTACT" />

      <section className="px-5 md:px-10 lg:px-16 pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {offices.map((office, i) => (
            <RevealOnScroll key={office.city} delay={i * 0.05}>
              <div className="bg-background p-8 md:p-10">
                <div className="flex items-start justify-between mb-8">
                  <h2 className="font-display font-black tracking-[-0.03em] leading-[1] text-[clamp(1.4rem,4.5vw,2rem)]">
                    {office.city}
                  </h2>
                  <span className="text-body-sm text-muted-foreground tabular-nums">
                    {times[office.city]}
                  </span>
                </div>

                <div className="space-y-3 text-body-sm text-muted-foreground">
                  <p>{office.address}</p>
                  <p>{office.phone}</p>
                  <a
                    href={`mailto:${office.email}`}
                    className="block link-hover w-fit hover:text-foreground transition-colors"
                  >
                    {office.email}
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

     <section className="dark-section section-padding overflow-x-hidden">
       <div className="max-w-5xl mx-auto w-full min-w-0">
         <RevealOnScroll>
           <h2 className="font-display font-black tracking-[-0.03em] leading-[0.95] text-[clamp(2.2rem,8vw,5rem)]">
             Let&apos;s start a
             <br />
             <span className="italic font-black">conversation</span>
           </h2>
     
           <p className="mt-6 text-body text-white/45 max-w-2xl">
             Fill out the form below and our team will get back to you within 24 hours.
           </p>
         </RevealOnScroll>
     
         <RevealOnScroll delay={0.12}>
           <form className="mt-12 w-full max-w-full min-w-0">
             <div className="w-full max-w-full min-w-0 border border-white/15">
               <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-full min-w-0">
                 {/* FIRST NAME */}
                 <div className="min-w-0 border-b border-white/15 md:border-r">
                   <div className="px-5 md:px-7 py-5 min-w-0">
                     <label className="block text-[11px] uppercase tracking-widest text-white/45">
                       First Name
                     </label>
                     <input
                       type="text"
                       placeholder="John"
                       className="mt-2 block w-full min-w-0 max-w-full bg-transparent outline-none text-white placeholder:text-white/20 text-[16px] leading-none h-10"
                     />
                   </div>
                 </div>
     
                 {/* LAST NAME */}
                 <div className="min-w-0 border-b border-white/15">
                   <div className="px-5 md:px-7 py-5 min-w-0">
                     <label className="block text-[11px] uppercase tracking-widest text-white/45">
                       Last Name
                     </label>
                     <input
                       type="text"
                       placeholder="Smith"
                       className="mt-2 block w-full min-w-0 max-w-full bg-transparent outline-none text-white placeholder:text-white/20 text-[16px] leading-none h-10"
                     />
                   </div>
                 </div>
     
                 {/* EMAIL */}
                 <div className="min-w-0 border-b border-white/15 md:border-r">
                   <div className="px-5 md:px-7 py-5 min-w-0">
                     <label className="block text-[11px] uppercase tracking-widest text-white/45">
                       Email
                     </label>
                     <input
                       type="email"
                       placeholder="john@estate.com"
                       className="mt-2 block w-full min-w-0 max-w-full bg-transparent outline-none text-white placeholder:text-white/20 text-[16px] leading-none h-10"
                     />
                   </div>
                 </div>
     
                 {/* PHONE */}
                 <div className="min-w-0 border-b border-white/15">
                   <div className="px-5 md:px-7 py-5 min-w-0">
                     <label className="block text-[11px] uppercase tracking-widest text-white/45">
                       Phone
                     </label>
                     <input
                       type="tel"
                       placeholder="+1 (___) ___-____"
                       className="mt-2 block w-full min-w-0 max-w-full bg-transparent outline-none text-white placeholder:text-white/20 text-[16px] leading-none h-10"
                     />
                   </div>
                 </div>
     
                 {/* INTEREST (full width) */}
                 <div className="md:col-span-2 min-w-0 border-b border-white/15">
                   <div className="px-5 md:px-7 py-5 min-w-0">
                     <label className="block text-[11px] uppercase tracking-widest text-white/45">
                       Interest
                     </label>
     
                     <div className="relative mt-2 min-w-0">
                       <select
                         defaultValue=""
                         className="block w-full min-w-0 max-w-full bg-transparent outline-none appearance-none cursor-pointer text-white text-[16px] leading-none h-10 pr-10"
                       >
                         <option value="" className="bg-[#151515] text-[#f5f5f5]">
                           Select an option
                         </option>
                         <option value="buying" className="bg-[#151515] text-[#f5f5f5]">
                           Buying a Property
                         </option>
                         <option value="selling" className="bg-[#151515] text-[#f5f5f5]">
                           Selling a Property
                         </option>
                         <option value="investment" className="bg-[#151515] text-[#f5f5f5]">
                           Investment Advisory
                         </option>
                         <option value="management" className="bg-[#151515] text-[#f5f5f5]">
                           Property Management
                         </option>
                         <option value="other" className="bg-[#151515] text-[#f5f5f5]">
                           Other
                         </option>
                       </select>
     
                       <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-white/50">
                         <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                           <path d="M7 10l5 5 5-5H7z" />
                         </svg>
                       </span>
                     </div>
                   </div>
                 </div>
     
                 {/* MESSAGE (full width) */}
                 <div className="md:col-span-2 min-w-0 border-b border-white/15">
                   <div className="px-5 md:px-7 py-5 min-w-0">
                     <label className="block text-[11px] uppercase tracking-widest text-white/45">
                       Message
                     </label>
                     <textarea
                       rows={4}
                       placeholder="Tell us about your requirements..."
                       className="mt-2 block w-full min-w-0 max-w-full bg-transparent outline-none resize-none text-white placeholder:text-white/20 text-[16px] leading-[1.35]"
                     />
                   </div>
                 </div>
     
                 {/* FOOTER (full width) */}
                 <div className="md:col-span-2 min-w-0">
                   <div className="px-5 md:px-7 py-5 min-w-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                     <p className="text-[13px] text-white/35 leading-relaxed min-w-0">
                       By sending this form, you agree to be contacted by Estate.
                     </p>
     
                     <button
                       type="submit"
                       className="w-full sm:w-auto inline-flex items-center justify-center gap-4 px-10 py-4 bg-white text-[#151515] text-[12px] uppercase tracking-widest hover:opacity-85 transition-opacity"
                     >
                       <span>Send message</span>
                       <span className="w-8 h-px bg-[#151515]" />
                     </button>
                   </div>
                 </div>
               </div>
             </div>
           </form>
         </RevealOnScroll>
       </div>
     </section>

      <Footer />
    </div>
  );
};

export default Contact;