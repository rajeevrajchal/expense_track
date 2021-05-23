import React, { ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NextPage } from 'next';
import { $FIXME } from '@utils/constant';

export interface OptionInterface {
  value: string;
  label: string;
}

interface SelectInterface {
  name?: string;
  value?: string;
  icon?: $FIXME;
  isError?: boolean;
  error?: $FIXME;
  options: OptionInterface[];
  change?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Select: NextPage<SelectInterface> = (props) => {
  const { options, name, value, icon, isError, error, change } = props;
  return (
    <>
      <div className="input-group">
        <div className="input-box">
          <select
            name={name}
            value={value}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => change(e)}
          >
            <option value="">Choose</option>
            {options.map((item, key: number) => (
              <option value={item.value} key={item.label}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
        <div className="input-icon">
          <FontAwesomeIcon icon={icon} />
        </div>
      </div>
      {isError && error && <div className="error-text">{error}</div>}
    </>
  );
};

export default Select;
