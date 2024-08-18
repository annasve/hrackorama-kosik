import './style.css';

interface IHeaderProps {
  total: number;
}

const Header: React.FC<IHeaderProps> = ({ total }) => {
  return (
    <header>
      <div className="brand">Hračkorama</div>
      <span>Košík: {total} Kč</span>
    </header>
  );
};

export default Header;
