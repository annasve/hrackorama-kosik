import { useState } from 'react';

import Banner from './components/Banner';
import Cart from './components/Cart';
import Header from './components/Header';
import './style.css';

import products from './data/products';
import IProduct from './models/Product';

const App: React.FC = () => {
  const [cartProducts, setCartProducts] = useState<IProduct[]>(products);

  const handleAmountChange = (index: number, amount: number) => {
    const newProducts = [...cartProducts];
    newProducts[index].amount = amount;
    setCartProducts(newProducts);
  };

  const total = cartProducts
    .map((p) => p.price * p.amount)
    .reduce((prev, cur) => prev + cur, 0);

  return (
    <div className="container">
      <Header total={total} />
      <Banner />
      <Cart products={cartProducts} onAmountChange={handleAmountChange} />
    </div>
  );
};

export default App;
