import {NextPage} from "next";
import {ChangeEvent} from "react";
import {$FIXME} from "@utils/constant";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


interface InputInterface {
    type: string
    placeholder?: string
    name?: string
    value?: string
    icon?: $FIXME
    isError?: boolean,
    error?: $FIXME
    change?: (e: ChangeEvent<HTMLInputElement>) => void
    handleIconClick?: () => void
}

const Input: NextPage<InputInterface> = (props) => {
    return (
        <>
            <div className="input-group">
                <div className="input-box">
                    <input type={props.type}
                           placeholder={props.placeholder}
                           name={props.name}
                           value={props.value}
                           onChange={(e: ChangeEvent<HTMLInputElement>) => props.change(e)}/>
                </div>
                {
                    props.icon && <div className="input-icon" onClick={() => props.handleIconClick()}>
                        <FontAwesomeIcon icon={props.icon}/>
                    </div>
                }
            </div>
            {
                (props.isError && props.error) && <div className="error-text">
                    {props.error}
                </div>
            }
        </>
    )
};

export default Input;
