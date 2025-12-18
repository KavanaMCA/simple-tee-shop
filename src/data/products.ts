export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

export const products: Product[] = [
  // Basics
  { id: 1, name: "Essential Black Tee", price: 999, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop", category: "Basics", isNew: true },
  { id: 2, name: "Minimalist White Tee", price: 899, image: "https://images.unsplash.com/photo-1622445275576-721325763afe?w=600&h=800&fit=crop", category: "Basics" },
  { id: 3, name: "Charcoal Grey Essential", price: 949, image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&h=800&fit=crop", category: "Basics" },
  { id: 4, name: "Navy Blue Classic", price: 999, image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop", category: "Basics" },
  { id: 5, name: "Olive Green Basic", price: 899, image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=800&fit=crop", category: "Basics" },
  { id: 6, name: "Cream Cotton Tee", price: 849, image: "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?w=600&h=800&fit=crop", category: "Basics" },
  { id: 7, name: "Burgundy Essential", price: 999, image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600&h=800&fit=crop", category: "Basics" },
  { id: 8, name: "Slate Blue Comfort", price: 949, originalPrice: 1199, image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=600&h=800&fit=crop", category: "Basics", isSale: true },

  // Graphics
  { id: 9, name: "Urban Graphic Print", price: 1299, originalPrice: 1699, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop", category: "Graphics", isSale: true },
  { id: 10, name: "Bold Statement Tee", price: 1499, image: "https://images.unsplash.com/photo-1503341733017-1901578f9f1e?w=600&h=800&fit=crop", category: "Graphics", isNew: true },
  { id: 11, name: "Abstract Art Print", price: 1399, image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=600&h=800&fit=crop", category: "Graphics" },
  { id: 12, name: "Neon Dreams Graphic", price: 1599, image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&h=800&fit=crop", category: "Graphics", isNew: true },
  { id: 13, name: "Retro Wave Design", price: 1449, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop", category: "Graphics" },
  { id: 14, name: "Typography Bold", price: 1299, image: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=600&h=800&fit=crop", category: "Graphics" },
  { id: 15, name: "Skull Art Edition", price: 1699, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop", category: "Graphics", isNew: true },
  { id: 16, name: "Geometric Pattern", price: 1399, originalPrice: 1799, image: "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=600&h=800&fit=crop", category: "Graphics", isSale: true },
  { id: 17, name: "Comic Pop Art", price: 1549, image: "https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?w=600&h=800&fit=crop", category: "Graphics" },
  { id: 18, name: "Mountain Silhouette", price: 1399, image: "https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=600&h=800&fit=crop", category: "Graphics" },
  { id: 19, name: "Japanese Kanji Art", price: 1699, image: "https://images.unsplash.com/photo-1551854838-212c50b4c184?w=600&h=800&fit=crop", category: "Graphics", isNew: true },
  { id: 20, name: "Graffiti Street Art", price: 1599, image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&h=800&fit=crop", category: "Graphics" },

  // Streetwear
  { id: 21, name: "Oversized Street Tee", price: 1799, image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop", category: "Streetwear", isNew: true },
  { id: 22, name: "Urban Dropout", price: 1999, image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=800&fit=crop", category: "Streetwear" },
  { id: 23, name: "Street Culture Black", price: 2199, image: "https://images.unsplash.com/photo-1606115915090-be18fea23ec7?w=600&h=800&fit=crop", category: "Streetwear", isNew: true },
  { id: 24, name: "Hype Beast Edition", price: 2499, image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800&fit=crop", category: "Streetwear" },
  { id: 25, name: "Skateboard Culture", price: 1899, originalPrice: 2399, image: "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?w=600&h=800&fit=crop", category: "Streetwear", isSale: true },
  { id: 26, name: "Underground Vibes", price: 2099, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop", category: "Streetwear" },
  { id: 27, name: "City Nights Drop", price: 2299, image: "https://images.unsplash.com/photo-1485218126466-34e6392ec754?w=600&h=800&fit=crop", category: "Streetwear", isNew: true },
  { id: 28, name: "Rebel Street Wear", price: 1999, image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=600&h=800&fit=crop", category: "Streetwear" },
  { id: 29, name: "Hip Hop Legacy", price: 2199, originalPrice: 2699, image: "https://images.unsplash.com/photo-1519235106695-a1a007278b58?w=600&h=800&fit=crop", category: "Streetwear", isSale: true },
  { id: 30, name: "Supreme Inspired", price: 2399, image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=800&fit=crop", category: "Streetwear" },
  { id: 31, name: "Boxy Fit Street", price: 1899, image: "https://images.unsplash.com/photo-1590739225287-bd31519780c9?w=600&h=800&fit=crop", category: "Streetwear" },
  { id: 32, name: "Tokyo Streets", price: 2599, image: "https://images.unsplash.com/photo-1484327973588-c31f829103fe?w=600&h=800&fit=crop", category: "Streetwear", isNew: true },

  // Vintage
  { id: 33, name: "Vintage Wash Classic", price: 1499, image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=800&fit=crop", category: "Vintage" },
  { id: 34, name: "90s Retro Vibe", price: 1699, image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=600&h=800&fit=crop", category: "Vintage", isNew: true },
  { id: 35, name: "Acid Wash Denim Blue", price: 1599, originalPrice: 1999, image: "https://images.unsplash.com/photo-1560343787-b90cb337028e?w=600&h=800&fit=crop", category: "Vintage", isSale: true },
  { id: 36, name: "Old School Band Tee", price: 1799, image: "https://images.unsplash.com/photo-1576053139778-7e32f2ae3d76?w=600&h=800&fit=crop", category: "Vintage" },
  { id: 37, name: "Faded Glory", price: 1449, image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&h=800&fit=crop", category: "Vintage" },
  { id: 38, name: "Classic Rock Era", price: 1899, image: "https://images.unsplash.com/photo-1535268244390-3cc193e67c6a?w=600&h=800&fit=crop", category: "Vintage", isNew: true },
  { id: 39, name: "Worn Out Perfection", price: 1549, image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=600&h=800&fit=crop", category: "Vintage" },
  { id: 40, name: "Retro Sports Jersey", price: 1999, originalPrice: 2499, image: "https://images.unsplash.com/photo-1618354691229-88d47f285158?w=600&h=800&fit=crop", category: "Vintage", isSale: true },
  { id: 41, name: "Throwback Thursday", price: 1699, image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=600&h=800&fit=crop", category: "Vintage" },
  { id: 42, name: "Heritage Collection", price: 1899, image: "https://images.unsplash.com/photo-1520263115673-610416f52ab6?w=600&h=800&fit=crop", category: "Vintage" },

  // Limited
  { id: 43, name: "Street Art Edition", price: 2999, image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=600&h=800&fit=crop", category: "Limited", isNew: true },
  { id: 44, name: "Artist Collab 001", price: 3499, image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=800&fit=crop", category: "Limited" },
  { id: 45, name: "Exclusive Drop", price: 3999, image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&h=800&fit=crop", category: "Limited", isNew: true },
  { id: 46, name: "Numbered Edition", price: 4499, image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=600&h=800&fit=crop", category: "Limited" },
  { id: 47, name: "Signature Series", price: 3799, originalPrice: 4299, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=800&fit=crop", category: "Limited", isSale: true },
  { id: 48, name: "One of One", price: 4999, image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=600&h=800&fit=crop", category: "Limited" },
  { id: 49, name: "Capsule Collection", price: 3299, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=800&fit=crop", category: "Limited", isNew: true },
  { id: 50, name: "Rare Archive", price: 5499, image: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?w=600&h=800&fit=crop", category: "Limited" },

  // Premium
  { id: 51, name: "Luxury Cotton Blend", price: 2999, image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=800&fit=crop", category: "Premium", isNew: true },
  { id: 52, name: "Organic Premium Tee", price: 2499, image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=600&h=800&fit=crop", category: "Premium" },
  { id: 53, name: "Silk Touch Edition", price: 3499, image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=600&h=800&fit=crop", category: "Premium" },
  { id: 54, name: "Egyptian Cotton", price: 3999, originalPrice: 4999, image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop", category: "Premium", isSale: true },
  { id: 55, name: "Designer Essential", price: 2799, image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&h=800&fit=crop", category: "Premium" },
  { id: 56, name: "High End Basics", price: 2599, image: "https://images.unsplash.com/photo-1512327428889-607eeb19efe8?w=600&h=800&fit=crop", category: "Premium", isNew: true },
];

export const categories = ["All", "Basics", "Graphics", "Streetwear", "Vintage", "Limited", "Premium"];
