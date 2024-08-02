import './style.css';

interface IAmountProps {
  count: number;
  onChange: (value: number) => void;
}

const Amount: React.FC<IAmountProps> = ({ count, onChange }) => {
  const handleIncrement = () => {
    onChange(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      onChange(count - 1);
    }
  };

  return (
    <div className="amount">
      <button className="amount__btn" onClick={handleDecrement}>
        –
      </button>
      <div className="amount__count">{count}</div>
      <button className="amount__btn" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default Amount;
