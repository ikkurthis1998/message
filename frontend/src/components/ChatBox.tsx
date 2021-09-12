import { FormEvent, useEffect, useState } from "react";
import socket from "../utils/socketIo";

const ChatBox = () => {

    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([] as any[]);

    const sendMessage = (e: FormEvent) => {
        e.preventDefault();
        socket.emit("login", { message });
        setMessage("");
    }

    useEffect(() => {
        socket.on("login", (payload) => {
            // console.log("hello");
            setChat([...chat, payload]);
        });
    })

    return (
        <div>
            {chat.map((payload, index) => {
                return <p key={index}>{ payload.message }</p>
            })}
            <form onSubmit={(e) => sendMessage(e)}>
                <input type="text" value={message} onChange={(e) => {
                    setMessage(e.target.value);
                }} />
                <button type="submit" >Send</button>
            </form>
        </div>
    )
};

export default ChatBox;