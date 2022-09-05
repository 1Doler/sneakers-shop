import './app.scss';

import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="slider">SLIDER</div>
      <div className="catalog">
        <div className="catalog-header">
          <h2>Все кроссовки</h2>
          <div className="search-block">
            <img src="img/search.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>
        <div className="wrapper">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
