import { Link } from "react-router-dom";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

const ProductCard = ({ id, name, price, originalPrice, image, category, isNew, isSale }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`} className="group cursor-pointer animate-fade-in block">
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-card rounded-lg overflow-hidden mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium tracking-wider uppercase">
              New
            </span>
          )}
          {isSale && (
            <span className="px-2 py-1 bg-destructive text-destructive-foreground text-xs font-medium tracking-wider uppercase">
              Sale
            </span>
          )}
        </div>

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium">
            View Product
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <p className="text-xs text-muted-foreground tracking-wider uppercase">{category}</p>
        <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">{name}</h3>
        <div className="flex items-center gap-2">
          <span className="font-display text-xl text-foreground">{formatPrice(price)}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">{formatPrice(originalPrice)}</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
