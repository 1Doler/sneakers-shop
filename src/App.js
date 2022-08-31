import './app.scss';

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="logo">
          <img src="img/sneakers.svg" width={40} height={40} alt="logo" className="logo" />
          <div className="text">
            <h2>Sneakers Shop</h2>
            <span>Магазин лучших кроссовок</span>
          </div>
        </div>
        <ul className="right">
          <li>
            <img src="img/buy1.png" width={30} height={30} alt="" className="logo" />
          </li>
          <li>
            <span>1200 р</span>
          </li>
          <li>
            <img src="img/favorite.png" width={30} height={30} alt="profile" className="profile" />
          </li>
          <li>
            <img src="img/profile.png" width={30} height={30} alt="profile" className="profile" />
          </li>
        </ul>
      </header>
      <div className="slider">SLIDER</div>
      <div className="catalog">
        <h2>Все кроссовки</h2>
        <div className="wrapper">
          <div className="card">
            <img width={133} height={112} src="img/sneaker.png" alt="sneaker" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="buy">
              <div className="price">
                <span>Цена: </span>
                <b>8000 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="img/plus.png" alt="+" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="img/sneaker1.png" alt="sneaker" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="buy">
              <div className="price">
                <span>Цена: </span>
                <b>8000 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="img/plus.png" alt="+" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="img/sneaker2.png" alt="sneaker" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="buy">
              <div className="price">
                <span>Цена: </span>
                <b>8000 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="img/plus.png" alt="+" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="img/sneaker3.png" alt="sneaker" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="buy">
              <div className="price">
                <span>Цена: </span>
                <b>8000 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="img/plus.png" alt="+" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="img/sneaker4.png" alt="sneaker" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="buy">
              <div className="price">
                <span>Цена: </span>
                <b>8000 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="img/plus.png" alt="+" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="img/sneaker1.png" alt="sneaker" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="buy">
              <div className="price">
                <span>Цена: </span>
                <b>8000 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="img/plus.png" alt="+" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="img/sneaker2.png" alt="sneaker" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="buy">
              <div className="price">
                <span>Цена: </span>
                <b>8000 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="img/plus.png" alt="+" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="img/sneaker3.png" alt="sneaker" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="buy">
              <div className="price">
                <span>Цена: </span>
                <b>8000 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="img/plus.png" alt="+" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
