import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  showLine?: boolean;
}

const PageHero = ({ title, showLine = true }: PageHeroProps) => {
  return (
    <section className="pt-32 md:pt-40 pb-12 md:pb-16 px-5 md:px-10 lg:px-16">
      <div className="overflow-hidden">
        <motion.h1
          className="text-display-xl font-display font-medium"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {title}
        </motion.h1>
      </div>
      {showLine && (
        <motion.div
          className="h-px bg-border mt-12 md:mt-16"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'left' }}
        />
      )}
    </section>
  );
};

export default PageHero;
