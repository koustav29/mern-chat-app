import { createContext,useState,useEffect,useContext } from "react";
import { useAuthContext } from "./AuthContext";
import { io } from "socket.io-client";

//creating a context
const SocketContext = createContext();

//creating a hook so that it can be consumed in other components
export const useSocketContext = () => {
    return useContext(SocketContext);
}

export const SocketContextProvider = ({ children }) => {
    const [socket,setSocket] = useState(null);
    const [onlineUsers,setOnlineUsers] = useState([]);
    const {authUser} = useAuthContext();

    useEffect(() => {
        if(authUser){
            const socket = io("http://localhost:8000",{
                //sending parameters to socket server for online users
                query: { userId: authUser._id },
            });
            
            //setting socket
            setSocket(socket);

            //socket.on() method is used to listen to the event. can be used both on client and server side
            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
            })

            return () => socket.close();
        }else{
            if(socket){
                socket.close();
                setSocket(null);
            }
        }
    },[authUser]);

    return (
        <SocketContext.Provider value={{socket,onlineUsers}}>{children}</SocketContext.Provider>
    );
};
