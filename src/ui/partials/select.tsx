import React, {ChangeEvent} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NextPage} from "next";
import {$FIXME} from "@utils/constant";

export interface OptionInterface {
    value: string
    label: string
}

interface SelectInterface {
    name?: string
    value?: string
    icon?: $FIXME
    isError?: boolean,
    error?: $FIXME
    options: OptionInterface[]
    change?: (e: ChangeEvent<HTMLSelectElement>) => void
}

const Select: NextPage<SelectInterface> = (props) => {
    return (
        <>
            <div className="input-group">
                <div className="input-box">
                    <select
                        name={props.name}
                        value={props.value}
                        onChange={(e: ChangeEvent<HTMLSelectElement>) => props.change(e)}>
                        <option value="">Choose</option>
                        {
                            props.options.map((item, key: number) => (
                                <option value={item.value} key={key}>{item.label}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="input-icon">
                    <FontAwesomeIcon icon={props.icon}></FontAwesomeIcon>
                </div>
            </div>
            {
                (props.isError && props.error) && <div className="error-text">
                    {props.error}
                </div>
            }
        </>
    );
};

export default Select;
