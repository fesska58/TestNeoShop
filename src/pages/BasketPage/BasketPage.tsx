import { Header } from "../../components/Header/Header"
import { Footer } from "../../components/Footer/Footer"
import { useEffect, useState } from "react"
import { getCart, updateQuantity, removeFromCart } from "../../utils/carStorage"
import { CartSummary } from "../../components/CartSummary/CartSummary"
import { CartItems } from "../../components/CartItems/CartItems"
import type { CartItem as CartItemType } from "../../types/cart";
import './backet.css'
import '../../page.css'

export default function BasketPage(){
  const [cart, setCart] = useState<CartItemType[]>([]);

  const syncCart = () => {
    setCart(getCart());
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    syncCart();
  }, []);

  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div>
      <Header likeCount={cart.length} cartCount={cart.length}/>

      <main className="backet">
        <h2 className="backet__title">Корзина</h2>

        <div className="backet__content">
          <div className="backet__items">
            {cart.map((item) => (
              <CartItems 
                key={item.product.id}
                item={item}
                onIncrease={() => {
                  updateQuantity(
                    item.product.id,
                    item.quantity + 1
                  );
                  syncCart();
                }}
                onDecrease={() => {
                  updateQuantity(
                    item.product.id,
                    item.quantity - 1
                  );
                  syncCart();
                }}
                onRemove={() => {
                  removeFromCart(item.product.id);
                  syncCart();
                }}
              />
            ))}
          </div>

          <CartSummary total={total}/>
        </div>
      </main>

      <div className="page"><Footer/></div>
    </div>
  )
}