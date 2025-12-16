import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import RevealOnScroll from '@/components/RevealOnScroll';

const articles = [
  {
    id: '1',
    title: 'The Meridian Tower Named Best Residential Development',
    date: 'December 10, 2024',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&h=600&fit=crop',
  },
  {
    id: '2',
    title: 'Luxury Real Estate Trends for 2025',
    date: 'December 5, 2024',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&h=600&fit=crop',
  },
  {
    id: '3',
    title: 'New Dubai Office Opening',
    date: 'November 28, 2024',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&h=600&fit=crop',
  },
  {
    id: '4',
    title: 'The Art of Staging Luxury Properties',
    date: 'November 20, 2024',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&h=600&fit=crop',
  },
  {
    id: '5',
    title: 'Partnership with Foster + Partners Announced',
    date: 'November 15, 2024',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&h=600&fit=crop',
  },
  {
    id: '6',
    title: 'Investment Opportunities in Mediterranean Markets',
    date: 'November 8, 2024',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&h=600&fit=crop',
  },
];

const News = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <PageHero title="NEWS" />

      {/* News Grid */}
      <section className="px-5 md:px-10 lg:px-16 pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 grid-gap">
          {articles.map((article, i) => (
            <RevealOnScroll key={article.id} delay={i * 0.1}>
              <Link to="#" className="group block">
                <div className="img-zoom aspect-[16/10] bg-muted overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay with title */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                    <p className="text-caption text-white/70 mb-2">{article.date}</p>
                    <h3 className="text-display-sm font-display text-white group-hover:opacity-80 transition-opacity">
                      {article.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-secondary">
        <RevealOnScroll>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-display-md font-display">
              Stay <span className="italic font-normal">informed</span>
            </h2>
            <p className="mt-6 text-body text-muted-foreground">
              Subscribe to our newsletter for exclusive market insights and property updates.
            </p>
            <form className="mt-10 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 bg-background border border-border focus:border-foreground outline-none transition-colors text-body-sm"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-foreground text-background text-body-sm uppercase tracking-wider hover:opacity-80 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </RevealOnScroll>
      </section>

      <Footer />
    </div>
  );
};

export default News;
