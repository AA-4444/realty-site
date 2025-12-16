import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <div className="flex flex-col items-center justify-center min-h-screen px-5 text-center">
        <motion.p
          className="text-caption uppercase text-muted-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Error
        </motion.p>
        <div className="overflow-hidden">
          <motion.h1
            className="text-display-xl font-display"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            404
          </motion.h1>
        </div>
        <motion.p
          className="mt-4 text-body-lg text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Page not found
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-4 mt-10 text-body-sm uppercase tracking-wider group"
          >
            <span>Return home</span>
            <span className="w-8 h-px bg-foreground group-hover:w-12 transition-all duration-300" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
