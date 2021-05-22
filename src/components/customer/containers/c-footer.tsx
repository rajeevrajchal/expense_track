import styles from "@components/customer/containers/customer.module.scss";
import Icon from "@ui/partials/icon";
import {faDiceD6, faReceipt, faFileInvoice, faSearch, faPlus} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";
import {useContext} from "react";
import {ModalEnum} from "@ui/shared/modal/modalEnum";
import Modal from "@ui/shared/modal";
import {openModal} from "@ui/shared/modal/services/modal-action";
import {Context} from "@context/store";
import AddExpense from "@components/customer/screens/expense/add_expense";

const CFooter = () => {
    const router = useRouter()
    const {state, dispatch} = useContext(Context)
    return (
        <>
            <footer className={styles.customer_footer}>
                <a href="/customer"
                   className={`${styles.customer_footer_icon} ${router.asPath === "/customer" && styles.customer_footer_active_icon}`}>
                    <Icon icon={faDiceD6} size={'lg'}></Icon>
                    <label>discover</label>
                </a>
                <a href="/customer/receipts"
                   className={`${styles.customer_footer_icon} ${router.asPath === "/customer/receipts" && styles.customer_footer_active_icon}`}>
                    <Icon icon={faReceipt} size={'lg'}></Icon>
                    <label>receipts</label>
                </a>
                <div className={`${styles.customer_footer_icon} ${styles.customer_footer_extra_icon}`}
                     onClick={() => dispatch(openModal({
                         mode: ModalEnum.add,
                     }))}>
                    <Icon icon={faPlus} size={'lg'}></Icon>
                </div>
                <a href="/customer/stats"
                   className={`${styles.customer_footer_icon} ${router.asPath === "/customer/stats" && styles.customer_footer_active_icon}`}>
                    <Icon icon={faFileInvoice} size={'lg'}></Icon>
                    <label>stats</label>
                </a>
                <a href="/customer/search"
                   className={`${styles.customer_footer_icon} ${router.asPath === "/customer/search" && styles.customer_footer_active_icon}`}>
                    <Icon icon={faSearch} size={'lg'}></Icon>
                    <label>search</label>
                </a>
            </footer>
            {
                state.modal.mode === ModalEnum.add && (<Modal title="New Transaction">
                    <div><AddExpense/></div>
                </Modal>)
            }
        </>
    );
};

export default CFooter;
