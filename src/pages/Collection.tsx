import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, Grid3X3, LayoutGrid } from "lucide-react";
import { useState } from "react";
import { products, categories } from "@/data/products";

const Collection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [gridCols, setGridCols] = useState(4);

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-12 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-5xl md:text-7xl tracking-wider text-foreground text-center">
            COLLECTION
          </h1>
          <p className="text-muted-foreground text-center mt-4 max-w-xl mx-auto">
            Explore our curated collection of 56+ premium t-shirts. Graphics, Streetwear, Vintage & more.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 border-b border-border sticky top-16 bg-background/80 backdrop-blur-md z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  className="text-xs tracking-wider uppercase"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* View Options */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
              <div className="hidden md:flex items-center gap-1 border border-border rounded-lg p-1">
                <button
                  onClick={() => setGridCols(3)}
                  className={`p-2 rounded ${gridCols === 3 ? 'bg-secondary' : ''}`}
                >
                  <Grid3X3 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setGridCols(4)}
                  className={`p-2 rounded ${gridCols === 4 ? 'bg-secondary' : ''}`}
                >
                  <LayoutGrid className="h-4 w-4" />
                </button>
              </div>
              <span className="text-sm text-muted-foreground">
                {filteredProducts.length} products
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className={`grid grid-cols-1 sm:grid-cols-2 ${gridCols === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'} gap-6 md:gap-8`}>
            {filteredProducts.map((product, index) => (
              <div key={product.id} style={{ animationDelay: `${index * 0.03}s` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Collection;
