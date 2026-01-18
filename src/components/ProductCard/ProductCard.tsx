import './productCard.css'
import type { Product } from '../../types/product';
import { addToCart } from '../../utils/carStorage';

interface ProductCardProps {
  product: Product;
  onAddToCart?: () => void;
}

export function ProductCard ({product, onAddToCart}: ProductCardProps) {
const handleBuy = () => {
  addToCart(product)
  onAddToCart?.()
}

  return (
    <div className="product-card">
      <img
        className="product-card__image"
        src={product.image}
        alt={product.title}
      />

      <div className="product-card__info">
        <h3 className="product-card__title">{product.title}</h3>
        <span className="product-card__price">{product.price}₽</span>
      </div>
      <div className="product-card__info">
        <span className="product-card__price">⭐{product.rate}</span>
        <button className="product-card__buy" onClick={handleBuy}>Купить</button>
        </div>
      
    </div>
  );
};
