import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NextPage} from "next";
import {IconProp, SizeProp} from "@fortawesome/fontawesome-svg-core";

interface IconsProps {
    icon: IconProp
    size: SizeProp
}

const Icon: NextPage<IconsProps> = (props) => {
    return (
        <FontAwesomeIcon icon={props.icon} size={props.size}></FontAwesomeIcon>
    );
};

export default Icon;
