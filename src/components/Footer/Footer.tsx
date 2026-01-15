import {Link} from 'react-router-dom'
import './footer.css'

export const Footer = () => {
    return (
       <footer className='footer'>
        
            <Link to='/' className='footer__logo'>
                QPICK    
            </Link>

            <nav className='footer__nav'>
                <Link to='/' className='footer__link'>
                    Избранное    
                </Link>
                <Link to='/cart' className='footer__link'>
                    Корзина    
                </Link>
                <Link to='/' className='footer__link'>
                    Товары    
                </Link>
            </nav>

            
            <div className='footer__lang'>
                <span style={{marginBottom: 15}}>Условия сервиса</span>
                <div className='buttons'>
                    <span>🌐</span>
                    <button className='footer__lang-btn footer__lang-btn--active'>RU</button>
                    <button className='footer__lang-btn'>EN</button>
                </div>                
            </div>

            <div className='footer__socials'>
                <a href='#' className='footer__social'>VK</a>
                <a href='#' className='footer__social'>TG</a>
                <a href='#' className='footer__social'>WS</a>
            </div>
            
        
       </footer>
    )
}