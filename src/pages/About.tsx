import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import RevealOnScroll from '@/components/RevealOnScroll';

const team = [
  {
    name: 'Alexander Sterling',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop',
  },
  {
    name: 'Victoria Chen',
    role: 'Managing Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=600&fit=crop',
  },
  {
    name: 'Marcus Webb',
    role: 'Head of Sales',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=600&fit=crop',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Design Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=600&fit=crop',
  },
  {
    name: 'James Morrison',
    role: 'Investment Advisor',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=600&fit=crop',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Client Relations',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=600&fit=crop',
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <PageHero title="ABOUT US" showLine={false} />

      <section className="px-5 md:px-10 lg:px-16 pb-24">
        <motion.div
          className="relative aspect-[21/9] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=800&fit=crop"
            alt="Luxury property"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
      </section>

      <section className="section-padding border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <RevealOnScroll>
            <div className="relative">
              <div className="absolute -top-8 -left-4 w-24 h-32 bg-muted overflow-hidden opacity-60">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=300&fit=crop"
                  alt=""
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="absolute top-12 right-0 w-20 h-28 bg-muted overflow-hidden opacity-60">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=300&fit=crop"
                  alt=""
                  className="w-full h-full object-cover grayscale"
                />
              </div>

              <div className="pt-20">
                <p
                  className="
                    font-display font-black uppercase tracking-[-0.03em]
                    leading-[0.9]
                    text-[clamp(2.2rem,8vw,4.6rem)]
                  "
                >
                  we&apos;re
                </p>
                <p
                  className="
                    font-display font-black italic uppercase tracking-[-0.03em]
                    leading-[0.9] mt-2
                    text-[clamp(2.2rem,8vw,4.6rem)]
                  "
                >
                  estate
                </p>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <p className="text-caption uppercase text-muted-foreground mb-8">
              since 2009
            </p>
            <p className="text-body-lg text-muted-foreground leading-relaxed">
              We believe in design that&apos;s both visionary and grounded in detail
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <RevealOnScroll className="lg:col-span-4">
            <p className="text-caption text-muted-foreground mb-4">— 25&apos;</p>
            <h2
              className="
                font-display font-black tracking-[-0.03em]
                leading-[0.95]
                text-[clamp(2.2rem,7vw,4.3rem)]
              "
            >
              innovation
              <br />
              through
              <br />
              <span className="italic font-black">time</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll className="lg:col-span-7 lg:col-start-6" delay={0.2}>
            <p className="text-body-lg text-muted-foreground leading-relaxed">
              We create spaces that enrich lives and inspire emotions, blending
              form, function, and storytelling to craft experiences that resonate
              deeply with each space and its inhabitants.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-padding">
        <RevealOnScroll>
          <p className="text-body text-muted-foreground mb-4">Why us?</p>
          <h2
            className="
              font-display font-black tracking-[-0.03em]
              leading-[0.95]
              mb-16
              text-[clamp(2.2rem,7vw,4.3rem)]
            "
          >
            5 reasons
            <br />
            to be with <span className="italic font-black">estate</span>
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {[
            { value: '15 years', label: 'of expertise', desc: 'A proven track record across residential, commercial, and hospitality sectors.' },
            { value: '60+', label: 'international awards', desc: 'Our projects have been recognized by top international juries.' },
            { value: '500+', label: 'properties', desc: 'We work with speed and quality, bringing knowledge from various projects.' },
            { value: '30+', label: 'international partners', desc: 'We work with the best global names in real estate.' },
            { value: '8 offices', label: 'around the world', desc: 'We have created projects in over 33 countries.' },
          ].map((item, i) => (
            <RevealOnScroll key={item.label} delay={i * 0.1}>
              <div className="bg-background p-8 md:p-12">
                <h3
                  className="
                    font-display font-black tracking-[-0.03em]
                    leading-[0.95]
                    text-[clamp(1.6rem,5.5vw,2.2rem)]
                  "
                >
                  {item.value}
                  <br />
                  <span className="text-body-lg text-muted-foreground font-display font-black">
                    {item.label}
                  </span>
                </h3>
                <p className="text-body text-muted-foreground mt-4">{item.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section className="dark-section section-padding">
        <RevealOnScroll>
          <p className="text-caption uppercase text-dark-muted mb-4">team</p>
          <h2
            className="
              font-display font-black tracking-[-0.03em]
              leading-[0.95]
              mb-16
              text-[clamp(2.2rem,7vw,4.3rem)]
            "
          >
            Integral parts
            <br />
            of <span className="italic font-black">estate</span>
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 grid-gap">
          {team.map((member, i) => (
            <RevealOnScroll key={member.name} delay={i * 0.05}>
              <div className="group">
                <div className="img-zoom aspect-[3/4] bg-dark-bg overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <h3 className="text-body-sm font-medium">{member.name}</h3>
                <p className="text-caption text-dark-muted mt-1">{member.role}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;