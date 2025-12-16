import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useMemo, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RevealOnScroll from '@/components/RevealOnScroll';

const projects = [
  {
    id: '1',
    title: 'The Meridian Tower',
    location: 'Manhattan, New York',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=1000&fit=crop',
    category: 'Residential',
  },
  {
    id: '2',
    title: 'Azure Bay Estate',
    location: 'Miami Beach, Florida',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=1000&fit=crop',
    category: 'Luxury Villa',
  },
  {
    id: '3',
    title: 'The Sterling Penthouse',
    location: 'London, UK',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=1000&fit=crop',
    category: 'Penthouse',
  },
  {
    id: '4',
    title: 'Palm Gardens Residence',
    location: 'Dubai, UAE',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=1000&fit=crop',
    category: 'Residential',
  },
];

type Project = (typeof projects)[number];

const cardMotion = (i: number) => ({
  initial: { opacity: 0, y: 40, scale: 0.985 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.04 },
});

const Card = ({
  project,
  heightClass,
  index,
}: {
  project: Project;
  heightClass: string;
  index: number;
}) => (
  <motion.div {...cardMotion(index)} className="w-full">
    <Link to={`/projects/${project.id}`} className="group block">
      <div className={`relative overflow-hidden bg-muted ${heightClass}`}>
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

        <div className="absolute left-5 right-5 bottom-5 md:left-6 md:right-6 md:bottom-6">
          <div className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            <p className="text-[11px] uppercase tracking-widest text-white/80">
              {project.category}
            </p>
            <p className="mt-1 text-white font-display font-black tracking-[-0.02em] text-[18px] md:text-[20px] leading-tight">
              {project.title}
            </p>
            <p className="mt-1 text-[12px] text-white/70">{project.location}</p>
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

const Index = () => {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 0.35, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);


  const rows = useMemo(() => {
    const out: Project[][] = [];
    for (let i = 0; i < projects.length; i += 2) out.push(projects.slice(i, i + 2));
    return out;
  }, []);

  
  const rowHeights = [
    'h-[300px] sm:h-[340px] md:h-[440px] lg:h-[520px]',
    'h-[340px] sm:h-[390px] md:h-[500px] lg:h-[600px]',
    'h-[320px] sm:h-[370px] md:h-[470px] lg:h-[560px]',
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <motion.section
        ref={heroRef}
        style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen overflow-hidden will-change-transform"
      >
        <div className="absolute inset-0">
          <motion.div
            className="w-full h-full"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop"
              alt="Luxury property"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="absolute inset-0 bg-black/25" />
        </div>

        <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center px-3 md:px-10">
          <motion.h1
            className="
              w-full text-center uppercase text-white
              font-display font-black tracking-[-0.045em] leading-[0.85]
              text-[clamp(2.7rem,14.5vw,12rem)]
              md:text-[clamp(6rem,11.5vw,16rem)]
            "
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ opacity: 0.85 }}
          >
            WE DESIGN
            <br />
            BESPOKE
            <br />
            SPACES
          </motion.h1>
        </div>

        <div className="relative z-20 min-h-screen">
          <div className="hidden md:block">
            <motion.div
              className="absolute bottom-6 right-6 z-20"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <Link
                to="/projects"
                className="
                  inline-flex items-center justify-center
                  px-7 py-3 rounded-full
                  bg-white text-black
                  text-[12px] uppercase tracking-wider
                  hover:opacity-90 transition-opacity
                "
              >
                Projects
              </Link>
            </motion.div>

            <motion.div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <span className="text-[11px] uppercase tracking-widest text-white/70">Scroll</span>
            </motion.div>
          </div>

          <div className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3 pb-4">
            <motion.span
              className="text-[11px] uppercase tracking-widest text-white/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              Scroll
            </motion.span>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <Link
                to="/projects"
                className="
                  inline-flex items-center justify-center
                  px-8 py-3 rounded-full
                  bg-white text-black
                  text-[12px] uppercase tracking-wider
                  hover:opacity-90 transition-opacity
                "
              >
                Projects
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <RevealOnScroll className="lg:col-span-5">
            <p className="text-caption uppercase text-muted-foreground mb-8">— 01 / About</p>
            <h2
              className="
                text-display-md font-display font-black tracking-[-0.04em]
                text-[clamp(2.2rem,7.5vw,3.8rem)]
                md:text-display-md
              "
            >
              We believe in
              <br />
              <span className="italic font-normal">visionary</span> design
            </h2>
          </RevealOnScroll>

          <RevealOnScroll className="lg:col-span-6 lg:col-start-7" delay={0.1}>
            <p className="text-body-lg text-muted-foreground leading-relaxed">
              Since 2009, Estate has been transforming the luxury real estate landscape. We curate
              exceptional properties that inspire and elevate the art of living.
            </p>
            <p className="text-body text-muted-foreground leading-relaxed mt-6">
              We create spaces that enrich lives and inspire emotions, blending form, function, and
              storytelling to craft experiences that resonate deeply with each space and its
              inhabitants.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-4 mt-10 text-body-sm uppercase tracking-wider group"
            >
              <span>Learn more</span>
              <span className="w-8 h-px bg-foreground group-hover:w-12 transition-all duration-300" />
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-padding-sm border-y border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {[
            { value: '15+', label: 'Years of Excellence' },
            { value: '500+', label: 'Properties Sold' },
            { value: '$2B+', label: 'Total Sales Volume' },
            { value: '8', label: 'Global Offices' },
          ].map((stat, i) => (
            <RevealOnScroll key={stat.label} delay={i * 0.1}>
              <div className="text-center md:text-left">
                <p className="text-display-sm font-display font-black tracking-[-0.03em]">
                  {stat.value}
                </p>
                <p className="text-caption uppercase text-muted-foreground mt-2">{stat.label}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Featured Projects  */}
      <section className="pt-24 md:pt-32 lg:pt-40">
        <div className="px-5 md:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <RevealOnScroll>
              <p className="text-caption uppercase text-muted-foreground mb-4">— 02 / Projects</p>
              <h2
                className="
                  text-display-md font-display font-black tracking-[-0.04em]
                  text-[clamp(2.2rem,7.5vw,3.8rem)]
                  md:text-display-md
                "
              >
                Featured
                <br />
                Properties
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <Link
                to="/projects"
                className="inline-flex items-center gap-4 text-body-sm uppercase tracking-wider group"
              >
                <span>View all projects</span>
                <span className="w-8 h-px bg-foreground group-hover:w-12 transition-all duration-300" />
              </Link>
            </RevealOnScroll>
          </div>
        </div>

        <div className="px-5 md:px-10 lg:px-16 pb-24 md:pb-32">
          <div className="grid gap-4 md:gap-6">
            {rows.map((pair, rowIndex) => {
              const heightClass = rowHeights[rowIndex % rowHeights.length];
              const isReversed = rowIndex % 2 === 1;

             
              if (pair.length === 1) {
                return (
                  <div key={`row-${rowIndex}`} className="grid lg:grid-cols-12 gap-4 md:gap-6">
                    <div className="lg:col-span-12">
                      <Card project={pair[0]} heightClass={heightClass} index={rowIndex * 2} />
                    </div>
                  </div>
                );
              }

              const leftSpan = isReversed ? 'lg:col-span-5' : 'lg:col-span-7';
              const rightSpan = isReversed ? 'lg:col-span-7' : 'lg:col-span-5';

              return (
                <div
                  key={`row-${rowIndex}`}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6"
                >
                  <div className={leftSpan}>
                    <Card project={pair[0]} heightClass={heightClass} index={rowIndex * 2} />
                  </div>
                  <div className={rightSpan}>
                    <Card project={pair[1]} heightClass={heightClass} index={rowIndex * 2 + 1} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section - Dark */}
      <section className="dark-section section-padding">
        <RevealOnScroll>
          <p className="text-caption uppercase text-dark-muted mb-8">— 03 / Services</p>

          <h2
            className="
              text-display-md
              font-display
              font-black
              tracking-[-0.03em]
              leading-[0.95]
              max-w-3xl
            "
          >
            Full-service luxury
            <br />
            <span className="italic font-black">real estate</span>
          </h2>
        </RevealOnScroll>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-px
            bg-white/10
            mt-16
            items-stretch
          "
        >
          {[
            {
              num: '01',
              title: 'Property Sales',
              desc: 'Expert guidance through every step of buying or selling luxury properties.',
            },
            {
              num: '02',
              title: 'Investment Advisory',
              desc: 'Strategic real estate investment consultation for maximum returns.',
            },
            {
              num: '03',
              title: 'Property Management',
              desc: 'Comprehensive management services for your valuable assets.',
            },
          ].map((service, i) => (
            <RevealOnScroll key={service.num} delay={i * 0.1}>
              <div className="bg-dark-bg p-8 md:p-12 h-full flex flex-col">
                <span className="text-caption text-dark-muted">{service.num}</span>

                <h3 className="text-display-sm font-display font-black tracking-[-0.03em] mt-6 mb-4">
                  {service.title}
                </h3>

                <p className="text-body text-dark-muted leading-relaxed flex-grow">{service.desc}</p>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-3 mt-8 text-body-sm uppercase tracking-wider group"
                >
                  <span>Learn more</span>
                  <span className="w-6 h-px bg-dark-fg group-hover:w-10 transition-all duration-300" />
                </Link>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <RevealOnScroll>
          <div className="text-center max-w-4xl mx-auto">
            <h2
              className="
                text-display-md font-display font-black tracking-[-0.04em]
                text-[clamp(2.2rem,7.5vw,3.8rem)]
                md:text-display-md
              "
            >
              Ready to find your
              <br />
              <span className="italic font-normal">dream property?</span>
            </h2>
            <p className="mt-6 text-body-lg text-muted-foreground">
              Let&apos;s start a conversation about your real estate goals.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center mt-10 px-10 py-4 bg-foreground text-background text-body-sm uppercase tracking-wider hover:opacity-80 transition-opacity"
            >
              Get in touch
            </Link>
          </div>
        </RevealOnScroll>
      </section>

      <Footer />
    </div>
  );
};

export default Index;