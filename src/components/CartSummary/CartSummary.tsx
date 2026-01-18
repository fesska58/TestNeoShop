import "./CartSummary.css";

interface CartSummaryProps {
  total: number;
}

export const CartSummary = ({ total }: CartSummaryProps) => {
  return (
    <div className="cart-summary">
      <div className="cart-summary__row">
        <span>Итого</span>
        <span>{total} ₽</span>
      </div>

      <button className="cart-summary__button">
        Перейти к оформлению
      </button>
    </div>
  );
};
