import type { CartItem as CartItemType } from "../../types/cart";
import './cartItems.css'

interface CartItemProps {
  item: CartItemType;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}

export const CartItems = ({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}:CartItemProps ) => {
    return(
        <div className="cart-item">
            <img 
                className="cart-item__image"
                src={item.product.image}
                alt={item.product.title}
            /> 
            
             <div className="cart-item__info">
                <h3 className="cart-item__title">{item.product.title}</h3>
                <span className="cart-item__price">{item.product.price} ₽</span>
            </div>

            <div className="cart-item__controls">
                <button className="btn" onClick={onDecrease}>−</button>
                <span>{item.quantity}</span>
                <button className="btn" onClick={onIncrease}>+</button>
            </div>

            <button
                className="cart-item__remove"
                onClick={onRemove}
            >
                ✕
            </button>
        </div>
    )
}