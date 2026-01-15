import {Header} from '../../components/Header/Header'
import { ProductCard } from '../../components/ProductCard/ProductCard'
import './catalog.css'
import { products } from '../../data/products'

export default function CatalogPage(){
  return (
    <>  
      <Header likeCount={0} cartCount={0}/>
      <main className="catalog">
        <h2 className="catalog__title">Наушники</h2>

        <div className="catalog__grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </>
  )
};