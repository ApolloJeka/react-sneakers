function Drawer() {
    return (
        <div style={{display: 'none'}} className="overlay">
        <div className="drawer">
        <h2 className="d-flex justify-between mb-30">Кошик <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove "/></h2>
       <div className="items">
       <div className="cartItem d-flex align-center mb-20">
          <div style={{ backgroundImage : 'url(/img/sneakers/Nike_Air_Max_270.jpg)'}} className="cartItemImg"></div>
          <div className="mr-20 flex">
            <p className="mb-5"> Чоловічі кросівки Nike Air Max 270</p>
            <b>4 999 грн.</b>
          </div>
          <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove "/>
        </div>
        <div className="cartItem d-flex align-center">
          <div style={{ backgroundImage : 'url(/img/sneakers/Nike_Air_Max_270.jpg)'}} className="cartItemImg"></div>
          <div className="mr-20 flex">
            <p className="mb-5"> Чоловічі кросівки Nike Air Max 270</p>
            <b>4 999 грн.</b>
          </div>
          <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove "/>
        </div>
       </div>
      <div className="cartTotalBlock">
      <ul className="cartTotalBlock">
        <li>
          <span>Разом: </span>
          <div></div>
          <b>7 998 грн. </b>
        </li>
        <li>
          <span>Налог 5%: </span>
          <div></div>
          <b>399,9 грн. </b>
        </li>
        </ul>     
        <button className="greenButton">
          Оформити замовлення
        <img src="/img/arrow.svg" alt="Arrow" /> 
        </button> 
      </div>
      </div>
      </div>
    );
}

export default Drawer;