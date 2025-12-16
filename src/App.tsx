import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import About from "./pages/About";
import News from "./pages/News";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const pageVariants = {
  initial: { opacity: 0, clipPath: "inset(0 0 0 100%)" },
  animate: { opacity: 1, clipPath: "inset(0 0 0 0%)" },
  exit: { opacity: 0, clipPath: "inset(0 100% 0 0%)" },
};

const pageTransition = {
  duration: 0.75,
  ease: [0.16, 1, 0.3, 1] as const,
};

const Page = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={pageTransition}
    className="min-h-screen"
    style={{ willChange: "clip-path, opacity" }}
  >
    {children}
  </motion.div>
);

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

const AnimatedRoutes = () => {
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
        <Route path="*" element={<Page><NotFound /></Page>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
