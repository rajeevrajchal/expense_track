import styles from '../auth.module.scss'

const AuthHeading = () => {
    return (
        <div className={styles.auth_heading}>
            <div className={styles.company_heading}>
                <img src="./expense.png" alt="expense"/>
            </div>
            <div className={styles.company_name}>
                <h2>Expense Tracking</h2>
            </div>
            <div className={styles.user_greeting}>
                Welcome
            </div>
        </div>
    );
};

export default AuthHeading;
