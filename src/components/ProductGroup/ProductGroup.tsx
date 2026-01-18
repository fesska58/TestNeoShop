import type { ProductGroup as ProductGroupType } from "../../types/product";
import { ProductCard } from "../ProductCard/ProductCard";
import "./ProductGroup.css";

interface ProductGroupProps {
  group: ProductGroupType;
  onAddToCart: () => void;
}

export const ProductGroup = ({group, onAddToCart}: ProductGroupProps) => {
    return (
        <section className="product-group">
            <h2 className="product-group__title">{group.title}</h2>
            
            <div className="product-group__grid">
                {group.products.map(product => (
                    <ProductCard key={product.id} product={product} onAddToCart={onAddToCart}/>
                ))}
            </div>
        </section>
    )
}