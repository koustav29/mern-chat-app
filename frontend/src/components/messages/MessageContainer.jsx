import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import {TiMessages} from "react-icons/ti"
import useConversation from '../../zustand/useConversation'

const MessageContainer = () => {
    // const noChatSelected = false;
    const {selectedConversation, setSelectedConversation} = useConversation();

    useEffect(() => {
        //clear selected conversation on unmount
        return () => {
            setSelectedConversation(null);
        }
    }, [setSelectedConversation])


    return (
        <div className='flex flex-col md:min-w-[700px]'>
            {!selectedConversation ? (<NoChatSelected />) :(
                <>
                    {/* Header */}
                    <div className='bg-violet-500 px-4 py-2 mb-2'>
                        <span className='label-text text-base text-white'>To   </span><span className='text-gray-800 font-bold slashed-zero '>{selectedConversation?.fullName}</span>
                    </div>
                    <Messages />
                    <MessageInput />
                </>
            )}
        </div>
    )
}

export default MessageContainer


const NoChatSelected = () => {
    const loggedInUser = JSON.parse(localStorage.getItem('chat-user')) 
    console.log(loggedInUser.fullName)
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome 👋 {loggedInUser.fullName} ❄</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    );
};







// STARTER CODE SNIPPET
// import React from 'react'
// import Messages from './Messages'
// import MessageInput from './MessageInput'
// import {TiMessages} from "react-icons/ti"

// const MessageContainer = () => {
//     const noChatSelected = true;
//     return (
//         <div className='flex flex-col md:min-w-[700px]'>
//             {noChatSelected ? (<NoChatSelected />) :(
//                 <>
//                     {/* Header */}
//                     <div className='bg-violet-500 px-4 py-2 mb-2'>
//                         <span className='label-text text-base text-white'>To   </span><span className='text-gray-800 font-bold slashed-zero '>John Doe</span>
//                     </div>
//                     <Messages />
//                     <MessageInput />
//                 </>
//             )}
//         </div>
//     )
// }

// export default MessageContainer


// const NoChatSelected = () => {
//     return (
//         <div className='flex items-center justify-center w-full h-full'>
//             <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
//                 <p>Welcome 👋 John Doe ❄</p>
//                 <p>Select a chat to start messaging</p>
//                 <TiMessages className='text-3xl md:text-6xl text-center' />
//             </div>
//         </div>
//     );
// };