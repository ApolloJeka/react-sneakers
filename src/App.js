
function App() {
  return  (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={18} height={18} src="/img/logo.png" alt="" />
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин найкращих кросівок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
          <img width={18} height={18} src="/img/cart.svg" alt="" />
            <span>440 грн</span>
          </li>
          <li>
          <img width={18} height={18} src="/img/user.svg" alt="" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Всі кросівки</h1>
      <div className="d-flex">
      <div className="card">
          <img width={133} height={112} src="/img/sneakers/Nike_Blazer_Mid_Suede_Green.jpg" alt="Sneakers" />
          <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
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
          <img width={133} height={112} src="/img/sneakers/Nike_Air_Max_270.jpg" alt="Sneakers" />
          <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
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
          <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
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
          <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
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
