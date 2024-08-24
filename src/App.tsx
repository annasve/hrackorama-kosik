import { useState } from 'react';

import Banner from './components/Banner';
import Cart from './components/Cart';
import Header from './components/Header';
import './style.css';

import products from './data/products';
import IProduct from './models/Product';

import { SettingsContext } from './components/context/settings-context';

const App: React.FC = () => {
  const [cartProducts, setCartProducts] = useState<IProduct[]>(products);

  const [userCurrency, setUserCurrency] = useState('Kč');

  const handleAmountChange = (index: number, amount: number) => {
    const newProducts = [...cartProducts];
    newProducts[index].amount = amount;
    setCartProducts(newProducts);
  };

  const total = cartProducts
    .map((p) => p.price * p.amount)
    .reduce((prev, cur) => prev + cur, 0);

  const handleSelect = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    if (evt.target.value === 'CZK') {
      setUserCurrency('Kč');
    }
    if (evt.target.value === 'EUR') {
      setUserCurrency('€');
    }
  };

  return (
    <SettingsContext.Provider value={{ currency: userCurrency }}>
      <div className="container">
        <select onChange={handleSelect}>
          <option value="">---Vyberte měnu---</option>
          <option value="CZK">Koruna česká</option>
          <option value="EUR">Euro</option>
        </select>

        <Header total={total} />

        <Banner />
        <Cart products={cartProducts} onAmountChange={handleAmountChange} />
      </div>
    </SettingsContext.Provider>
  );
};

export default App;
