import { useAuth0 } from "@auth0/auth0-react";

const GuestWelcome = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <div className="bg-gray-700 flex justify-center items-center box-border w-screen h-screen p-5">
            <div className="bg-white flex flex-col justify-center items-center mobile-sm:w-4/6 tablet:w-96 h-96 rounded-lg">
                <h1 className="text-5xl font-bold">Welcome!</h1>
                <button onClick={() => loginWithRedirect()}>Lets Go</button>
            </div>
        </div>
    )
}

export default GuestWelcome;