import { useAuth0 } from "@auth0/auth0-react";


const AuthHome = () => {

    const { logout, user } = useAuth0();

    if (user) {
        return (
            <div className="flex justify-evenly w-screen h-screen rounded-lg py-10 box-border">
                <div className="bg-white flex flex-col justify-start items-center mobile-sm:w-full tablet:w-3/12 rounded-lg">
                    <img src={user.picture} alt={user.name} />
                    <h2>{user.nickname}</h2>
                    <p>{user.email}</p>
                    <button onClick={() => logout({ returnTo: "http://localhost:3000" })}>Log Out</button>
                </div>
                <div className="bg-white tablet:flex flex-col justify-start rounded-lg mobile-sm:hidden tablet:w-8/12">

                </div>
            </div>
        );
    }
    
    return null

}

export default AuthHome;