import Login from '@components/auth/login';
import SimpleLayout from '@hoc/simple.layout';
import AuthHeading from "@components/auth/components/authHeading";
import AuthFooter from "@components/auth/components/authFooter";

const Home = () => {
    const [screen, setScreen] = useState<string>('login')
    const getScreen = () => {
        switch (screen) {
            case 'login':
                return <Login/>
            case 'register':
                return <Register/>
        }
    }
    return (
        <SimpleLayout title="Login" description="get login here ">
            <AuthHeading/>
            {
                getScreen()
            }
            <AuthFooter setScreen={setScreen} screen={screen}/>
        </SimpleLayout>
    )
}

import Cookies from "cookies";
import {useState} from "react";
import Register from "@components/auth/register";

export const getServerSideProps = async (context) => {
    let secure = process.env.NODE_ENV === "production";
    const myCookies = new Cookies(context.req, context.res, {secure});
    const accessToken = await myCookies.get('ExpenseTrackingToken')

    if (accessToken) {
        return {
            redirect: {
                destination: '/customer',
                permanent: false
            }
        }
    }
    return {
        props: {}
    }
}

export default Home
