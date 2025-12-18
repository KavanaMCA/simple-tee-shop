import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";

const FeaturedProducts = () => {
  // Get featured products (new arrivals and some best sellers)
  const featuredProducts = products.filter(p => p.isNew || p.isSale).slice(0, 8);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-xs font-medium tracking-widest text-primary uppercase mb-2 block">
              Featured
            </span>
            <h2 className="font-display text-4xl md:text-5xl tracking-wider text-foreground">
              BEST SELLERS
            </h2>
          </div>
          <Link to="/collection" className="mt-4 md:mt-0">
            <Button variant="ghost" className="group gap-2">
              View All 56+ Products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product, index) => (
            <div key={product.id} style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
