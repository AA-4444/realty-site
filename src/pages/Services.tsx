import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import RevealOnScroll from '@/components/RevealOnScroll';

const services = [
  {
    id: '01',
    title: 'Property Sales',
    description: 'Expert guidance through every step of buying or selling luxury properties. Our team provides comprehensive market analysis and personalized strategies to achieve optimal results.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&h=600&fit=crop',
  },
  {
    id: '02',
    title: 'Investment Advisory',
    description: 'Strategic real estate investment consultation for maximum returns. We identify prime opportunities and guide you through complex transactions with precision.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&h=600&fit=crop',
  },
  {
    id: '03',
    title: 'Property Management',
    description: 'Comprehensive management services for your valuable assets. From tenant relations to maintenance, we handle every aspect professionally.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&h=600&fit=crop',
  },
  {
    id: '04',
    title: 'Interior Design',
    description: 'Transform spaces into exceptional living environments. Our design team creates interiors that reflect sophistication and personal style.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&h=600&fit=crop',
  },
  {
    id: '05',
    title: 'Relocation Services',
    description: 'Seamless transition to your new home, anywhere in the world. We manage every detail from logistics to settling into your new community.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&h=600&fit=crop',
  },
  {
    id: '06',
    title: 'Legal & Financial',
    description: 'Expert assistance with legal and financial aspects of real estate transactions. Our network of professionals ensures smooth closings.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&h=600&fit=crop',
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <PageHero title="SERVICES" />

      {/* All Services Header */}
      <section className="px-5 md:px-10 lg:px-16 pb-8">
        <RevealOnScroll>
          <h2 className="text-display-sm font-display">All services</h2>
        </RevealOnScroll>
      </section>

      {/* Services Grid  */}
      <section className="px-5 md:px-10 lg:px-16 pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 grid-gap">
          {services.map((service, i) => (
            <RevealOnScroll key={service.id} delay={i * 0.1}>
              <Link to="/contact" className="group block">
                <div className="img-zoom aspect-[16/10] bg-muted overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay with title  */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                    <span className="text-caption text-white/70">{service.id}</span>
                    <h3 className="text-display-sm font-display text-white mt-2">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <p className="text-body text-muted-foreground mt-5 max-w-lg">
                  {service.description}
                </p>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="dark-section section-padding">
        <RevealOnScroll>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-display-md font-display">
              Let's discuss your
              <br />
              <span className="italic font-normal">requirements</span>
            </h2>
            <p className="mt-6 text-body-lg text-dark-muted">
              Our team is ready to provide tailored solutions for your real estate needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center mt-10 px-10 py-4 bg-white text-dark-bg text-body-sm uppercase tracking-wider hover:opacity-80 transition-opacity"
            >
              Contact us
            </Link>
          </div>
        </RevealOnScroll>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
