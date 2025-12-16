import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';

const allProjects = [
  {
    id: '1',
    title: 'The Meridian Tower',
    location: 'Manhattan, New York',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=1600&fit=crop',
    category: 'residential',
  },
  {
    id: '2',
    title: 'Azure Bay Estate',
    location: 'Miami Beach, Florida',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=1600&fit=crop',
    category: 'villa',
  },
  {
    id: '3',
    title: 'The Sterling Penthouse',
    location: 'London, UK',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=1600&fit=crop',
    category: 'penthouse',
  },
  {
    id: '4',
    title: 'Palm Gardens Residence',
    location: 'Dubai, UAE',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=1600&fit=crop',
    category: 'residential',
  },
  {
    id: '5',
    title: 'The Horizon Estate',
    location: 'Los Angeles, California',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=1600&fit=crop',
    category: 'villa',
  },
  {
    id: '6',
    title: 'Monaco Heights',
    location: 'Monte Carlo, Monaco',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=1600&fit=crop',
    category: 'penthouse',
  },
  {
    id: '7',
    title: 'The Belvedere',
    location: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&h=1600&fit=crop',
    category: 'residential',
  },
  {
    id: '8',
    title: 'Sunset Cove Villa',
    location: 'Malibu, California',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=1600&fit=crop',
    category: 'villa',
  },
  {
    id: '9',
    title: 'The Summit Residence',
    location: 'Hong Kong',
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&h=1600&fit=crop',
    category: 'penthouse',
  },
];

const categories = [
  { key: 'all', label: 'all projects' },
  { key: 'residential', label: 'residential /' },
  { key: 'villa', label: 'villa /' },
  { key: 'penthouse', label: 'penthouse /' },
];

type Project = typeof allProjects[number];

const cardMotion = (i: number) => ({
  initial: { opacity: 0, y: 28, scale: 0.99 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.04 },
});

const Card = ({ project, heightClass, index }: { project: Project; heightClass: string; index: number }) => (
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
            <p className="mt-1 text-white font-display text-[18px] md:text-[20px] leading-tight">
              {project.title}
            </p>
            <p className="mt-1 text-[12px] text-white/70">
              {project.location}
            </p>
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects =
    activeCategory === 'all'
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  
  const rows = useMemo(() => {
    const out: Project[][] = [];
    for (let i = 0; i < filteredProjects.length; i += 2) {
      out.push(filteredProjects.slice(i, i + 2));
    }
    return out;
  }, [filteredProjects]);

  
  const rowHeights = [
    'h-[320px] sm:h-[360px] md:h-[460px] lg:h-[520px]',
    'h-[360px] sm:h-[420px] md:h-[520px] lg:h-[600px]',
    'h-[340px] sm:h-[400px] md:h-[500px] lg:h-[560px]',
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <PageHero title="PROJECTS" />

      <div className="px-5 md:px-10 lg:px-16 pb-12">
        <div className="flex flex-wrap gap-6 md:gap-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`text-body-sm md:text-body transition-opacity ${
                activeCategory === cat.key
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {cat.label}
            </button>
          ))}
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
              <div key={`row-${rowIndex}`} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6">
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

      <Footer />
    </div>
  );
};

export default Projects;