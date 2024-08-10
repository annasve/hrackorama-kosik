import { useState } from 'react';
import IProduct from '../../models/Product';
import CartItem from '../CartItem';
import './style.css';

const products: IProduct[] = [
  {
    name: 'Hrad z kostek',
    price: 450,
    amount: 2,
  },
  {
    name: 'Autíčko na ovládání',
    price: 1500,
    amount: 1,
  },
  {
    name: 'Domeček pro panenky',
    price: 1350,
    amount: 1,
  },
  {
    name: 'Dětský telefon',
    price: 730,
    amount: 1,
  },
];

const Cart = () => {
  const [cartProducts, setCartProducts] = useState(products);

  const handleAmountChange = (index: number, amount: number) => {
    const newProducts = [...cartProducts];
    newProducts[index].amount = amount;
    setCartProducts(newProducts);
  };

  let itemsCount = 0;
  cartProducts.forEach((product) => (itemsCount += product.amount));

  return (
    <div className="cart">
      <div className="cart__head">
        <h2>Košík</h2>
        <span>Položek: {itemsCount}</span>
      </div>
      <div className="cart__items">
        {products.map((product, index) => (
          <CartItem
            product={product}
            key={product.name}
            onAmountChange={(value) => handleAmountChange(index, value)}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
