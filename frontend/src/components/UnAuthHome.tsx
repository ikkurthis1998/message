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
            <h1 className="text-5xl mb-5 font-semibold font-rajdhani">lets Chat</h1>
            {isLoading && <>
                    <p className="mb-5">Hold up a minute there...</p>
                    <div className=" flex justify-center items-center">
                        <div className="animate-spin rounded-full h-28 w-28 border-b-2 border-gray-900"></div>
                    </div>
                </>
            }
            {!isLoading && <>
                <button className="mobile-sm:w-28 h-10 mobile-sm:text-lg border-gray-500 text-white bg-gray-600 hover:bg-gray-700 rounded-lg mb-5" onClick={() => loginWithRedirect()}>Lets Go!</button>
                <button className="mobile-sm:w-28 h-10 mobile-sm:text-lg border-gray-500 text-white bg-gray-600 hover:bg-gray-700 rounded-lg mb-5" onClick={async () => await guestLogin()}>Guest login*</button>
                <p className="text-red-500">*If you are opting for guest login,<br/> please make sure cookies are allowed.</p>
            </>}
        </div>
    )
}

export default UnAuthHome;