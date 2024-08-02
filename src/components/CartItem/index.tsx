import { useState } from 'react';
import IProduct from '../../models/Product';
import Amount from '../Amount';
import CartProduct from '../CartProduct';
import './style.css';

interface ICartItemProps {
  product: IProduct;
}

const CartItem: React.FC<ICartItemProps> = ({ product }) => {
  const [count, setCount] = useState(product.amount);
  return (
    <div className="cart-item">
      <CartProduct name={product.name} price={product.price} />
      <Amount count={count} onChange={setCount} />
    </div>
  );
};

export default CartItem;
