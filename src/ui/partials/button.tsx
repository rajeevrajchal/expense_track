import { NextPage } from 'next';
import { $FIXME } from '@utils/constant';

interface ButtonInterface {
  btnType: string;
  label: string;
  loading?: boolean;
  handleClick: (obj: $FIXME) => void;
}

const Button: NextPage<ButtonInterface> = (props) => {
  const { btnType, label, handleClick, loading } = props;
  return (
    <button
      type="submit"
      className={`btn ${btnType} flex align-center items-center justify-center`}
      onClick={(obj: $FIXME) => handleClick(obj)}
    >
      {loading ? (
        <div className="lds-ring">
          <div />
          <div />
          <div />
          <div />
        </div>
      ) : (
        <h3>{label}</h3>
      )}
    </button>
  );
};

export default Button;
