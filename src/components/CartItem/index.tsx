import IProduct from '../../models/Product';
import Amount from '../Amount';
import CartProduct from '../CartProduct';
import './style.css';

interface ICartItemProps {
  product: IProduct;
  onAmountChange: (value: number) => void;
}

const CartItem: React.FC<ICartItemProps> = ({ product, onAmountChange }) => {
  return (
    <div className="cart-item">
      <CartProduct name={product.name} price={product.price} />
      <Amount count={product.amount} onChange={onAmountChange} />
    </div>
  );
};

export default CartItem;
