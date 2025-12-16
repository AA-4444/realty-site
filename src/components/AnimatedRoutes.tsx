import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Index from '@/pages/Index';
import Projects from '@/pages/Projects';
import Services from '@/pages/Services';
import About from '@/pages/About';
import News from '@/pages/News';
import Contact from '@/pages/Contact';

const pageVariants = {
  initial: { x: 120, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -120, opacity: 0 },
};

const pageTransition = {
  duration: 0.7,
  ease: [0.16, 1, 0.3, 1],
};

const Page = ({ children }: { children: React.ReactNode }) => (
  <motion.div
	variants={pageVariants}
	initial="initial"
	animate="animate"
	exit="exit"
	transition={pageTransition}
	className="min-h-screen"
  >
	{children}
  </motion.div>
);

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
	<AnimatePresence mode="wait">
	  <Routes location={location} key={location.pathname}>
		<Route path="/" element={<Page><Index /></Page>} />
		<Route path="/projects" element={<Page><Projects /></Page>} />
		<Route path="/services" element={<Page><Services /></Page>} />
		<Route path="/about" element={<Page><About /></Page>} />
		<Route path="/news" element={<Page><News /></Page>} />
		<Route path="/contact" element={<Page><Contact /></Page>} />
	  </Routes>
	</AnimatePresence>
  );
}