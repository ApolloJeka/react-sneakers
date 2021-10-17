import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';


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
      < Card />
      <div className="card">
          <img width={133} height={112} src="/img/sneakers/Nike_Air_Max_270.jpg" alt="Sneakers" />
          <h5>Чоловічі кросівки Nike Air Max 270</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
            <span>Ціна:</span>
            <b>4 999 грн.</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
          </button>
        </div>
      </div>
      <div className="card">
          <img width={133} height={112} src="/img/sneakers/Nike_Blazer_Mid _Suede_White.jpg" alt="Sneakers" />
          <h5>Чоловічі кросівки Nike Blazer Mid Suede White</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
            <span>Ціна:</span>
            <b>4 999 грн.</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
          </button>
        </div>
      </div>
      <div className="card">
          <img width={133} height={112} src="/img/sneakers/Puma_X_Aka_Boku_Future_Rider.jpg" alt="Sneakers" />
          <h5>Чоловічі кросівки Puma X Aka Boku Future Rider</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
            <span>Ціна:</span>
            <b>4 999 грн.</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
          </button>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}
export default App;
