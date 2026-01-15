import { Link } from "react-router-dom";
import './styleHeader.css'

interface HeaderProps {
  cartCount: number;
  likeCount: number;
}

export const Header = ({ cartCount, likeCount }: HeaderProps) => {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          QPICK
        </Link>
        <div className="header__links">
          <Link to="/cart" className="header__cart">
            <span className="header__cart-icon">🤍</span>  
            {likeCount > 0 && (
              <span className="header__count">{likeCount}</span>
            )}
          </Link>
          <Link to="/cart" className="header__cart">          
            <span className="header__cart-icon">🛒</span>          
            {cartCount > 0 && (
              <span className="header__count">{cartCount}</span>
            )}
          </Link>
        </div>
        
      </div>
    </header>
  );
};

