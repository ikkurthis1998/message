import { FormEvent, RefObject, useEffect, useRef, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import socket from "../utils/socketIo";

const ChatBox = () => {

    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([] as any[]);

    const [loading, setLoading] = useState(false);

    const myRef = useRef<HTMLDivElement>(null);

    const { user } = useAuth0();

    const sendMessage = (e: FormEvent) => {
        e.preventDefault();
        if (message) {
            socket.emit("public", { message, name: user?.name, sub: user?.sub, timeStamp: new Date().toISOString() });
        }
        setMessage("");
    }

    const scrollToRef = (ref: RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView();
    };

    useEffect(() => {
        const getPublicChats = async () => {
            setLoading(true);
            try {
                // await dbConnect();
                const response = await fetch("http://localhost:3000/publicChats");
                const publicChats = await response.json();
                // console.log(response);
                setChat(publicChats);
            } catch (error) {
                console.log(error)
            }
        }

        getPublicChats().then(() => {
            console.log("Yes");
            setLoading(false);
        });
        
    }, []);

    socket.on("public", (payload) => {
            // console.log("hello");
            setChat([...chat, payload]);
            scrollToRef(myRef);
        });

    return (
        <div className="w-96 h-5/6 border flex flex-col justify-end bg-gray-200 rounded m-5">
            <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-gray-200 flex flex-col p-2">
                {chat.map((payload, index) => {
                    let shortOptions: Intl.DateTimeFormatOptions = { hour: "2-digit", minute: "2-digit" };
                    // let longOptions: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "2-digit", minute: "2-digit" };
                    return (
                        <div key={index} className={ user?.sub === payload.sub ? "flex flex-col self-end border bg-blue-300 min-w-md max-w-2/3 py-1 px-3 m-1 rounded" : "flex flex-col self-start border bg-white min-w-md max-w-2/3 py-1 px-3 m-1 rounded" }>
                            <p className={user?.sub === payload.sub ? "text-sm self-end font-bold hidden" : "text-sm self-start font-bold text-blue"}>{payload.name}</p>
                            <p className={user?.sub === payload.sub ? "self-end text-lg" : "self-start text-lg"}>{payload.message}</p>
                            <p className={user?.sub === payload.sub ? "self-end text-sm" : "self-end text-sm" }>{ new Date(payload.timeStamp).toLocaleString("en-US", shortOptions) }</p>
                        </div>
                    )
                })}
                <div ref={myRef}>{ loading ? "Loading..." : "" }</div>
            </div>
            <form onSubmit={(e) => sendMessage(e)} className="mb-1 flex mx-2">
                <input required className="flex-grow px-2 focus:outline-none focus:border-transparent rounded" type="text" value={message} onChange={(e) => {
                    setMessage(e.target.value);
                }} />
                <button type="submit" className="w-14 border bg-green-300 border border-green-300 rounded" >Send</button>
            </form>
        </div>
    )
};

export default ChatBox;