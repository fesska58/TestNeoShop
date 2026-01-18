import {Header} from '../../components/Header/Header'
import { ProductGroup } from '../../components/ProductGroup/ProductGroup'
import './catalog.css'
import { productGroups } from '../../data/products'
import { Footer } from '../../components/Footer/Footer'
import { getCart } from '../../utils/carStorage'
import { useState } from 'react'

export default function CatalogPage(){

  const [cartCount, setCartCount] = useState(() => getCart().length);
  const [likeCount] = useState(() => getCart().length);

 
  
  const handleAddToCart = () => {
    setCartCount(prev => prev + 1)
  }
  return (
    <>  
      <Header likeCount={likeCount} cartCount={cartCount}/>

      <main className="catalog">
        {productGroups.map(group => (
          <ProductGroup key={group.id} group={group} onAddToCart={handleAddToCart}/>
        ))}
      </main>

      <Footer/>
    </>
  )
};