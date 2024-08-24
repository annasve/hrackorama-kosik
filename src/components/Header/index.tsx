import './style.css';

import { useSettings } from '../context/settings-context';

interface IHeaderProps {
  total: number;
}

const Header: React.FC<IHeaderProps> = ({ total }) => {
  const { currency } = useSettings();

  return (
    <header>
      <div className="brand">Hračkorama</div>
      <span>
        Košík: {currency === '€' ? (total * 0.04).toFixed(2) : total} {currency}
      </span>
    </header>
  );
};

export default Header;
