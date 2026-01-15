import {Header} from '../components/Header/Header'

export default function BasketPage(){
  return (
    <>
      <Header likeCount={1} cartCount={2}/>
      <main>
        <h1>Корзина</h1>
      </main>
    </>
  )
}