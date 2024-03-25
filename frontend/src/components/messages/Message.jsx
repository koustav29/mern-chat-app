import React from 'react'

const Message = () => {
    return (
        <div className='chat chat-start'>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img
                        alt='Tailwinf CSS chat bubble avatar' src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <div className={`chat-bubble text-white bg-blue-500`}>
                Hi! what's up?!
            </div>
            <div className='chat-footer text-xs opacity-90 flex gap-1 items-center'>12:42</div>
        </div>
    )
}

export default Message

















// STARTER CODE SNIPPET
// import React from 'react'

// const Message = () => {
//     return (
//         <div className='chat chat-start'>
//             <div className='chat-image avatar'>
//                 <div className='w-10 rounded-full'>
//                     <img
//                         alt='Tailwinf CSS chat bubble avatar' src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
//                 </div>
//             </div>
//             <div className={`chat-bubble text-white bg-blue-500`}>
//                 Hi! what's up?!
//             </div>
//             <div className='chat-footer text-xs opacity-50 flex gap-1 items-center'>12:42</div>
//         </div>
//     )
// }

// export default Message