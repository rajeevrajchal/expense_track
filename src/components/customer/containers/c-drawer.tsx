import React, {useState} from 'react';
import styles from './drawer.module.scss'
import {faSignOutAlt, faArrowLeft, faShapes, faComment} from "@fortawesome/free-solid-svg-icons";
import Icon from "@ui/partials/icon";
import {NextPage} from "next";
import {useRouter} from "next/router";
import {callApi} from "@plugins/call.axios";
import {$FIXME} from "@utils/constant";

interface DrawerInterface {
    setDrawer: (obj: boolean) => void
}

const Drawer: NextPage<DrawerInterface> = (props) => {
    const {setDrawer} = props
    const router = useRouter()
    const user = typeof window !== 'undefined' && JSON.parse(window.localStorage.getItem('login-user'))
    const [loading, setLoading] = useState<boolean>(false)
    const handleLogout = async () => {
        setLoading(true)
        const res: $FIXME = await callApi('POST', 'auth/logout', true)
        if (res.status !== 200) {
            console.log('error on logout')
        }
        localStorage.removeItem('login-user')
        localStorage.removeItem('ExpenseTrackingToken')
        await router.replace('/')
        setLoading(false)
    }

    return (
        <div className={styles.drawer_menu}>
            <div className={styles.drawer_backdrop}/>
            <div className={styles.top_notch}>
                <div className="icon" onClick={() => setDrawer(false)}>
                    <Icon icon={faArrowLeft} size={"lg"}/>
                </div>
            </div>
            <div className={styles.user_basic_info}>
                <div className={styles.user_avatar}>
                    <img
                        src={user && user.avatar ? user.avatar : 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'}
                        alt="user-avatar"/>
                </div>
                <div className={styles.user_name}>
                    <h3>{user ? user.name : ''}</h3>
                </div>
                <div className={styles.email}>
                    <h3>{user && user ? user.email : ''}</h3>
                </div>
                <div className={styles.user_phone}>
                    <h3>{user && user.phone ? user.phone : 'xxxxxxxxxx'}</h3>
                </div>
            </div>

            <div className={styles.drawer_menu_items}>
                <div className={`btn secondary ${styles.drawer_menu_item}`}>
                    <Icon icon={faShapes} size={"lg"}/>
                    <h4>Category</h4>
                </div>
                <div className={`btn secondary ${styles.drawer_menu_item}`}>
                    <Icon icon={faComment} size={"lg"}/>
                    <h4>FeedBack</h4>
                </div>
                <div className={`btn secondary ${styles.drawer_menu_item}`} onClick={() => handleLogout()}>
                    {
                        loading ? <div className="lds-ring">
                            <div/>
                            <div/>
                            <div/>
                            <div/>
                        </div> : <>
                            <Icon icon={faSignOutAlt} size={"lg"}/>
                            <h4>Logout</h4>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Drawer;
