import styles from './hoc.module.scss'
import {NextPage} from 'next';
import {$CHILDREN} from '@utils/constant';
import HtmlHead from '@ui/shared/html_head';
import CNavbar from "@components/customer/containers/c-navbar";
import CFooter from "@components/customer/containers/c-footer";
import Drawer from "@components/customer/containers/c-drawer";
import {useState} from "react";

interface MainLayoutInterface {
    title?: string;
    description: string;
    children: $CHILDREN;
}

const CustomerLayout: NextPage<MainLayoutInterface> = (props) => {
        const {
            title,
            description,
            children,
        } = props
        const [drawer, setDrawer] = useState<boolean>(false)
        return (
            <>
                <HtmlHead title={title} description={description}/>
                <main className={styles.customer}>
                    <CNavbar setDrawer={setDrawer}/>
                    {
                        drawer && (<>
                            <div className={styles.backdrop} onClick={() => setDrawer(false)}/>
                            <Drawer setDrawer={setDrawer}/>
                        </>)
                    }
                    {
                        children
                    }
                    {
                        !drawer && <CFooter/>
                    }
                </main>
            </>
        );
    }
;

export default CustomerLayout;
