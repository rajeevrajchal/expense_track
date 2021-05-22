import {CLOSE_MODAL, ModalStateInterface, OPEN_MODAL} from "@ui/shared/modal/services/modal-reducer";

export const closeModal = () => ({
    type: CLOSE_MODAL,
});

export const openModal = (modalData: ModalStateInterface) => ({
    type: OPEN_MODAL,
    payload: {
        show: true,
        mode: modalData.mode,
    },
});
