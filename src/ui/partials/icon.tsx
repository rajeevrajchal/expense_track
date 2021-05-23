import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NextPage } from 'next';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';

interface IconsProps {
  icon: IconProp;
  size: SizeProp;
}

const Icon: NextPage<IconsProps> = (props) => {
  const { icon, size } = props;
  return <FontAwesomeIcon icon={icon} size={size} />;
};

export default Icon;
