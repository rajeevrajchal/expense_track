import { FC, useContext } from 'react';
import { $CHILDREN } from '@utils/constant';
import { closeModal } from '@ui/shared/modal/services/modal.action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Context } from '@context/store';
import styles from './modal.module.scss';

interface ModalInterface {
  children: $CHILDREN;
  title?: string;
}

const Modal: FC<ModalInterface> = (props) => {
  const { children, title } = props;
  const { state, dispatch } = useContext(Context);
  const { show } = state.modal;
  return (
    <>
      {show && (
        <div className={styles.modal}>
          <div
            className={styles.modalBackdrop}
            onClick={() => dispatch(closeModal())}
          />
          <div className={`${styles.modalBody} card`}>
            <div className="flex justify-between align-center items-center ">
              <h3 className={styles.modalHeader}>{title}</h3>
              <div className={styles.modalClose}>
                <div
                  className={styles.modalCloseIcon}
                  onClick={() => dispatch(closeModal())}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </div>
              </div>
            </div>
            <div className={styles.modalElements}>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
