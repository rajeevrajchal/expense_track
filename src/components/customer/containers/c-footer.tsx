import Link from 'next/link'
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
                <Link href="/customer">
                    <div className={`${styles.customer_footer_icon} ${router.asPath === "/customer" && styles.customer_footer_active_icon}`}>
                        <Icon icon={faDiceD6} size={'lg'}/>
                        <label>discover</label>
                    </div>
                </Link>
                <Link href="/customer/receipts">
                    <div className={`${styles.customer_footer_icon} ${router.asPath === "/customer/receipts" && styles.customer_footer_active_icon}`}>
                        <Icon icon={faReceipt} size={'lg'}/>
                        <label>receipts</label>
                    </div>
                </Link>
                <div className={`${styles.customer_footer_icon} ${styles.customer_footer_extra_icon}`}
                     onClick={() => dispatch(openModal({
                         mode: ModalEnum.add,
                     }))}>
                    <Icon icon={faPlus} size={'lg'}/>
                </div>
                <Link href="/customer/stats">
                    <div className={`${styles.customer_footer_icon} ${router.asPath === "/customer/stats" && styles.customer_footer_active_icon}`}>
                        <Icon icon={faFileInvoice} size={'lg'}/>
                        <label>stats</label>
                    </div>
                </Link>
                <Link href="/customer/search">
                    <div className={`${styles.customer_footer_icon} ${router.asPath === "/customer/search" && styles.customer_footer_active_icon}`}>
                        <Icon icon={faSearch} size={'lg'}/>
                        <label>search</label>
                    </div>
                </Link>
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
