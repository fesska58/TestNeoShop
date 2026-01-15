import {Header} from '../../components/Header/Header'
import { ProductGroup } from '../../components/ProductGroup/ProductGroup'
import './catalog.css'
import { productGroups } from '../../data/products'
import { Footer } from '../../components/Footer/Footer'

export default function CatalogPage(){
  return (
    <>  
      <Header likeCount={0} cartCount={0}/>

      <main className="catalog">
        {productGroups.map(group => (
          <ProductGroup key={group.id} group={group}/>
        ))}
      </main>

      <Footer/>
    </>
  )
};