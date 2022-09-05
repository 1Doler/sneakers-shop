function Drawer() {
  return (
    <div style={{ display: 'none' }} className="overlay">
      <div className="drawer">
        <h2>Корзина</h2>
        <div className="content">
          <div className="cart-item">
            <div className="cart">
              <img width={80} height={80} src="img/sneaker3.png" alt="sneaker" />
              <div className="text">
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <p>8 000 руб</p>
              </div>
              <button>
                <img width={11} height={11} src="img/plus.png" alt="" />
              </button>
            </div>
            <div className="cart">
              <img width={80} height={80} src="img/sneaker1.png" alt="sneaker" />
              <div className="text">
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <p>6 800 руб</p>
              </div>
              <button>
                <img width={11} height={11} src="img/plus.png" alt="" />
              </button>
            </div>
          </div>
          <div className="price">
            <div className="total">
              <span>Итого: </span>
              <span>14 800</span>
            </div>
            <button>Оформить заказ</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
