import React from 'react'
import { useState } from 'react';
import { BsSend } from "react-icons/bs";
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {

    //instantiate hooks
    const {loading, sendMessage} = useSendMessage()

    const [message, setMessage] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(!message) return;
        await sendMessage(message);
        setMessage("");
    }

    return (
        <form className='px-4 my-3' onSubmit={handleSubmit}>
            <div className='w-full relative'>
                <input type="text"
                    className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
                    placeholder='Type a message...'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
                    {loading ? <div className='loading loading-spinner'></div> : <BsSend />}
                </button>
            </div>
        </form>
    )
}

export default MessageInput;


// STARTER CODE SNIPPET
// import React from 'react'
// import { BsSend } from "react-icons/bs";

// const MessageInput = () => {
//   return (
//     <form className='px-4 my-3'>
//         <div className='w-full'>
//             <input type="text" 
//             className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
//             placeholder='Type a message...'
//             />
//             <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
//                 <BsSend/>
//             </button>
//         </div>
//     </form>
//   )
// }

// export default MessageInput