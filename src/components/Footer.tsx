import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const menu = [
    { label: 'Projects', to: '/projects' },
    { label: 'Services', to: '/services' },
    { label: 'About', to: '/about' },
    { label: 'News', to: '/news' },
    { label: 'Contact', to: '/contact' },
  ];

  const socials = [
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Facebook', href: '#' },
    { label: 'Behance', href: '#' },
  ];

  return (
    <footer className="bg-dark-bg text-dark-fg">
      <div className="px-5 md:px-10 lg:px-16 py-16 md:py-24">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link
              to="/"
              className="text-[28px] md:text-[32px] font-display font-black tracking-tight"
            >
              Estate
            </Link>
            <p className="mt-6 text-body text-dark-muted max-w-md leading-relaxed">
              We believe in design that's both visionary and grounded in detail.
              Creating exceptional real estate experiences since 2009.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="text-caption uppercase text-dark-muted mb-6">Menu</h4>

            <nav className="flex flex-col gap-3">
              {menu.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="inline-flex w-fit text-body-sm link-hover leading-7"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-caption uppercase text-dark-muted mb-6">Contact</h4>

            <div className="flex flex-col gap-3 text-body-sm leading-7">
              <a href="mailto:info@estate.com" className="inline-flex w-fit link-hover">
                info@estate.com
              </a>
              <p className="text-dark-muted">+1 (212) 555-0123</p>
            </div>
          </div>

          {/* Social */}
          <div className="lg:col-span-2">
            <h4 className="text-caption uppercase text-dark-muted mb-6">Social</h4>

          
            <div className="flex flex-col gap-3 text-body-sm leading-7">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="inline-flex w-fit link-hover"
                  target="_blank"
                  rel="noreferrer"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8 text-body-sm text-dark-muted">
          <p>© {currentYear} Estate. All rights reserved.</p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="hover:text-dark-fg transition-colors leading-7">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-dark-fg transition-colors leading-7">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;