import { NextPage } from 'next';
import { ChangeEvent } from 'react';
import { $FIXME } from '@utils/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface InputInterface {
  type: string;
  placeholder?: string;
  name?: string;
  value?: string;
  icon?: $FIXME;
  isError?: boolean;
  error?: $FIXME;
  change?: (e: ChangeEvent<HTMLInputElement>) => void;
  handleIconClick?: () => void;
}

const Input: NextPage<InputInterface> = (props) => {
  const {
    type,
    placeholder,
    name,
    value,
    icon,
    isError,
    error,
    change,
    handleIconClick,
  } = props;
  return (
    <>
      <div className="input-group">
        <div className="input-box">
          <input
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={(e: ChangeEvent<HTMLInputElement>) => change(e)}
          />
        </div>
        {icon && (
          <div
            className="input-icon"
            onClick={() => handleIconClick()}
            key="click icon"
          >
            <FontAwesomeIcon icon={icon} />
          </div>
        )}
      </div>
      {isError && error && <div className="error-text">{error}</div>}
    </>
  );
};

export default Input;
