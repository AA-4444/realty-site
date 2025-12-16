import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pendingPath, setPendingPath] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsOpen(false);
    setPendingPath(null);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { name: 'Instagram', url: '#' },
    { name: 'Facebook', url: '#' },
    { name: 'LinkedIn', url: '#' },
    { name: 'Behance', url: '#' },
  ];

  const handleMenuNavigate = (path: string) => {
    if (path === location.pathname) {
      setIsOpen(false);
      return;
    }
    setPendingPath(path);
    setIsOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <div className="flex items-center justify-between px-5 md:px-10 py-6">
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden flex items-center"
            aria-label="Open menu"
          >
            <span className="w-10 h-10 grid place-items-center rounded-full bg-white/20">
              <span className="block w-4">
                <span className="block h-px bg-white mb-1.5" />
                <span className="block h-px bg-white" />
              </span>
            </span>
          </button>

          <Link
            to="/"
            className="text-[15px] font-bold tracking-tight text-white uppercase"
          >
            Estate
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks
              .filter((l) => l.path !== '/')
              .map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[12px] uppercase tracking-wider text-white/80 hover:text-white transition-colors ${
                    location.pathname === link.path ? 'text-white' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/25 text-white text-[12px] uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              Let&apos;s talk <span className="text-white/70">+</span>
            </Link>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="
                md:hidden
                w-10 h-10
                grid place-items-center
                rounded-full
                bg-white/20
                text-white
                hover:bg-white/30
                transition-colors
              "
              aria-label="Telegram"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M21.8 2.2c-.5-.4-1.2-.5-1.9-.3L2.9 8.5c-.8.3-1.3 1-1.2 1.8.1.8.7 1.4 1.5 1.6l4.6 1.3 1.8 5.6c.2.7.7 1.2 1.4 1.3h.2c.6 0 1.1-.2 1.5-.6l2.6-2.7 5.1 3.7c.3.2.7.4 1.1.4.2 0 .5 0 .7-.1.7-.2 1.2-.8 1.4-1.5L22.9 3.9c.2-.7 0-1.3-.5-1.7z" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          if (pendingPath) {
            navigate(pendingPath);
            setPendingPath(null);
          }
        }}
      >
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-white"
            initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            exit={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute top-0 left-0 right-0 px-5 py-6 flex items-center justify-between">
              <button
                type="button"
                onClick={() => handleMenuNavigate('/')}
                className="text-[14px] font-bold uppercase tracking-wider text-foreground"
              >
                Estate
              </button>

              <button
                onClick={() => {
                  setPendingPath(null);
                  setIsOpen(false);
                }}
                className="text-[13px] text-foreground uppercase tracking-wider flex items-center gap-4"
                aria-label="Close menu"
              >
                <span>close</span>
                <div className="w-10 h-10 rounded-full border border-black/15 relative">
                  <span className="absolute top-1/2 left-1/2 w-5 -translate-x-1/2 h-px bg-foreground rotate-45" />
                  <span className="absolute top-1/2 left-1/2 w-5 -translate-x-1/2 h-px bg-foreground -rotate-45" />
                </div>
              </button>
            </div>

            <div className="h-[100dvh] pt-28 pb-10 px-5 md:px-10 lg:px-16 flex flex-col">
              <div className="flex-1 overflow-y-auto">
                <nav className="flex flex-col items-start">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.06 + i * 0.05,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="w-full"
                    >
                      <button
                        type="button"
                        onClick={() => handleMenuNavigate(link.path)}
                        className={`
                          block w-full text-left
                          uppercase font-display font-bold tracking-tight
                          leading-[0.9]
                          text-foreground
                          py-2
                          break-words
                          text-[clamp(3.2rem,12vw,6.8rem)]
                          md:text-[clamp(4.5rem,7vw,7.5rem)]
                          ${location.pathname === link.path ? 'opacity-40' : 'opacity-100'}
                        `}
                      >
                        {link.name}
                      </button>
                    </motion.div>
                  ))}
                </nav>

                <div className="mt-10">
                  <button
                    type="button"
                    onClick={() => handleMenuNavigate('/contact')}
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-foreground text-background text-[12px] uppercase tracking-wider"
                  >
                    Let&apos;s talk <span className="opacity-80">+</span>
                  </button>
                </div>
              </div>

              <motion.div
                className="pt-8 mt-8 border-t border-black/10 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <div className="space-y-2 text-[13px] text-black/60">
                  <p>New York · London · Dubai · Miami</p>
                  <a href="#" className="hover:text-black transition-colors">
                    info@estate.com
                  </a>
                </div>

                <div className="flex flex-wrap gap-5 text-[13px]">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      className="text-black/60 hover:text-black transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;