import './style.css';

import { useSettings } from '../context/settings-context';

interface CartProductProps {
  name: string;
  price: number;
}

const CartProduct: React.FC<CartProductProps> = ({ name, price }) => {
  const { currency } = useSettings();

  return (
    <div className="cart-product">
      <span>{name}</span>
      <span>
        {currency === '€' ? (price * 0.04).toFixed(2) : price} {currency}{' '}
      </span>
    </div>
  );
};

export default CartProduct;
