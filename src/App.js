import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  {
    name: 'Чоловічі кросівки Nike Blazer Mid Suede Green',
    price: 4999,
    imageUrl: '/img/sneakers/Nike_Blazer_Mid_Suede_Green.jpg', 
  },
  {
    name: 'Чоловічі кросівки Nike Blazer Mid Suede White',
    price: 4999,
    imageUrl: '/img/sneakers/Nike_Blazer_Mid _Suede_White.jpg', 
  },
  {
    name: 'Кросівки Puma X Aka Boku Future Rider',
    price: 4999,
    imageUrl: '/img/sneakers/Puma_X_Aka_Boku_Future_Rider.jpg', 
  },
  {
    name: 'Чоловічі кросівки Nike Air Max 270',
    price: 4999,
    imageUrl: '/img/sneakers/Nike_Blazer_Mid _Suede_White.jpg', 
  },
]

function App() {
  return  (
    <div className="wrapper clear">
      
      <Drawer />

      < Header />
      <div className="content p-40">
       <div className="d-flex align-center justify-between mb-40">
        <h1>Всі кросівки</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search"></img>
          <input placeholder="Пошук..." />
        </div>
       </div>
      <div className="d-flex">
        {arr.map((obj) => (
          <Card
            title={obj.name}
            price={obj.price}
            imageUrl={obj.imageUrl}
          />
        ))}
      </div>
    </div>
    </div>
  )
}
export default App;
