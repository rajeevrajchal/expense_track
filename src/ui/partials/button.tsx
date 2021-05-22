import {NextPage} from "next";
import {$FIXME} from "@utils/constant";

interface ButtonInterface {
    btn_type: string,
    label: string,
    loading?: boolean,
    handleClick: (obj: $FIXME) => void
}

const Button: NextPage<ButtonInterface> = (props) => {
    const {btn_type, label, handleClick, loading} = props
    return (
        <button
            type="submit" className={`btn ${btn_type} flex align-center items-center justify-center`}
            onClick={(obj: $FIXME) => handleClick(obj)}>
            {
                loading ? <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div> : <h3>
                    {label}
                </h3>
            }
        </button>
    );
};

export default Button;
