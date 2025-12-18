const BrandBanner = () => {
  return (
    <section className="py-20 bg-secondary/30 border-y border-border overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 mx-8">
            <span className="font-display text-5xl md:text-7xl text-muted-foreground/30 tracking-widest">
              THREADS
            </span>
            <span className="text-primary">★</span>
            <span className="font-display text-5xl md:text-7xl text-muted-foreground/30 tracking-widest">
              PREMIUM
            </span>
            <span className="text-primary">★</span>
            <span className="font-display text-5xl md:text-7xl text-muted-foreground/30 tracking-widest">
              STREETWEAR
            </span>
            <span className="text-primary">★</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandBanner;
