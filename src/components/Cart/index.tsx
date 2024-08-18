import CartItem from '../CartItem';
import './style.css';
import IProduct from '../../models/Product';

//(alternativa k přesunutí products do samostatné složky: udělat odsud nějaký callback, který by posílal tu cenu a amount do App)

interface CartProps {
  products: IProduct[];
  onAmountChange: (index: number, amount: number) => void;
}

const Cart: React.FC<CartProps> = ({ products, onAmountChange }) => {
  let itemsCount = 0;
  products.forEach((product) => (itemsCount += product.amount));
  //alternativní způsob výpočtu itemsCount:
  // const itemsCount = cartProducts.map(p => p.amount).reduce((prev, cur) => prev+cur, 0)

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
            onAmountChange={(value) => onAmountChange(index, value)}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
