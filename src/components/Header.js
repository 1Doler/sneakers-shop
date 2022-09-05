function Header() {
  return (
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
          <span>16 000 р</span>
        </li>
        <li>
          <img src="img/favorite.png" width={30} height={30} alt="profile" className="profile" />
        </li>
        <li>
          <img src="img/profile.png" width={30} height={30} alt="profile" className="profile" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
