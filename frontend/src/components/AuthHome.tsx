import { useAuth0 } from "@auth0/auth0-react";


const AuthHome = () => {

    const { logout, user } = useAuth0();

    if (user) {
        return (
            <div className="flex justify-evenly w-screen h-screen rounded-lg py-10 box-border">
                <div className="bg-white flex flex-col justify-start items-center mobile-sm:w-full tablet:w-3/12 rounded-lg">
                    <div>
                        <img src={user.picture} alt={user.name} />
                        <h2>{user.nickname}</h2>
                        <p>{user.email}</p>
                        <button onClick={() => logout({ returnTo: "http://localhost:3000" })}>Log Out</button>
                    </div>
                    <div className="flex flex-col">
                        <div>
                            <img
                                alt="pg"
                                src='https://firebasestorage.googleapis.com/v0/b/roc8-careers.appspot.com/o/07-Leadership.png?alt=media&token=aaf3da73-f680-47b6-b5da-11894f6a27d9'
                            />
                        </div>
                    </div>
                </div>
                <div className="bg-white tablet:flex flex-col justify-start rounded-lg tablet:w-8/12 mobile-sm:hidden">

                </div>
            </div>
        );
    }
    
    return null

}

export default AuthHome;