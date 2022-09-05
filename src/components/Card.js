function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="img/heart-liked.svg" alt="heart" />
      </div>
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
  );
}

export default Card;
