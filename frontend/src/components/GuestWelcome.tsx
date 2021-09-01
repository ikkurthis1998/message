import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

const GuestWelcome = () => {
    const { loginWithRedirect } = useAuth0();
    const [enable, setEnable] = useState(false);

    useEffect(() => {
        if (window.location.search) {
            setEnable(true);
        }
    }, [])

    return (
        <div className="bg-blue flex justify-center items-center box-border w-screen h-screen p-5">
            <div className="bg-white flex flex-col justify-center items-center mobile-sm:w-4/6 tablet:w-96 h-96 rounded-lg p-14">
                <h1 className="text-5xl font-bold mb-5">Welcome!</h1>
                <p className="text-lg mb-5">This guest account is to try out different features of the app</p>
                <p className="text-lg mb-5">Be friendly, kind, welcoming and respectful.</p>
                <button onClick={() => loginWithRedirect()} className={ `text-xl rounded-lg w-24 h-10 text-white ${enable ? "bg-blue hover:bg-blue-600 " : "bg-blue-400 cursor-wait"}` } disabled={enable ? false : true}>Lets Go</button>
            </div>
        </div>
    )
}

export default GuestWelcome;