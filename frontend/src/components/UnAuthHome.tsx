import { useAuth0 } from "@auth0/auth0-react";
import { WebAuth } from 'auth0-js';
import { useHistory } from "react-router-dom";


const UnAuthHome = () => {

    const { loginWithRedirect, isLoading } = useAuth0();

    const history = useHistory();

    const webAuth = new WebAuth({
                          domain: process.env.REACT_APP_AUTH_DOMAIN as string,
                          clientID: process.env.REACT_APP_CLIENT_ID as string,
                          redirectUri: "http://localhost:3000/guestLogin",
                          responseType: 'code'
                      })

    const guestLogin = async () => {
        await webAuth.login({
        email: "test@test.com",
        password: "test123T@",
        realm: "Username-Password-Authentication"
        }, (error: any, result: any) => {
        if (error) {
            console.error(error);
        }
        console.log(result);
        });
        history.push('/guestLogin');
    }

    return (
        <div className="bg-white flex flex-col justify-center items-center mobile-sm:w-4/6 tablet:w-96 h-96 rounded-lg">
            <img
                className="w-20"
                alt="message"
                src="https://firebasestorage.googleapis.com/v0/b/roc8-careers.appspot.com/o/18-Message%20(No%20Padding).png?alt=media&token=17bc37fd-03fa-48ba-9e68-1949220cd671"
            />
            <h1 className="text-5xl mb-5 font-bold font-rajdhani">message</h1>
            {isLoading && <>
                    <p className="mb-5">Hold up a minute there...</p>
                    <div className=" flex justify-center items-center">
                        <div className="animate-spin rounded-full h-28 w-28 border-b-2 border-gray-900"></div>
                    </div>
                </>
            }
            {!isLoading && <>
                <button className="mobile-sm:w-28 h-10 mobile-sm:text-base text-white font-bold bg-blue hover:bg-blue-600 rounded-lg mb-5" onClick={() => loginWithRedirect()}>Lets Go!</button>
                <button className="mobile-sm:w-28 h-10 mobile-sm:text-base text-white font-bold bg-blue hover:bg-blue-600 rounded-lg mb-5" onClick={async () => await guestLogin()}>Guest login*</button>
                <p className="text-red-500">*If you are opting for guest login,<br/> please make sure cookies are allowed.</p>
            </>}
        </div>
    )
}

export default UnAuthHome;