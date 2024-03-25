import React from 'react'

const Login = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 min-h-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-indigo-800 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20'>
                <h1 className='text-3xl font-bold text-center text-gray-300'>
                    Login
                    <span className='text-blue-500'> K_Chat</span>
                </h1>

                <form>
                    {/* username div */}
                    <div>
                        <label className='label p-2'>
                            <span className='label-text text-base'>
                                username
                            </span>
                        </label>
                        <input type="text" placeholder='Enter your username' className='input input-bordered w-full h-10' />
                    </div>
                    
                    {/* password div */}
                    <div>
                        <label className='label p-2'>
                            <span className='label-text text-base'>
                                password
                            </span>
                        </label>
                        <input type="password" placeholder='Enter your password' className='input input-bordered w-full h-10' />
                    </div>

                    {/* submit button div */}
                    <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                        Don't have an account?
                    </a>
                    <div>
                        <button className='btn btn-block btn-sm mt-2'>Login</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Login






// STARTER CODE FOR LOGIN
// const Login = () => {
//     return (
//         <div className='flex flex-col items-center justify-center min-w-96 min-h-96 mx-auto'>
//             <div className='w-full p-6 rounded-lg shadow-md bg-indigo-800 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20'>
//                 <h1 className='text-3xl font-bold text-center text-gray-300'>
//                     Login
//                     <span className='text-blue-500'> K_Chat</span>
//                 </h1>

//                 <form>
//                     {/* username div */}
//                     <div>
//                         <label className='label p-2'>
//                             <span className='label-text text-base'>
//                                 username
//                             </span>
//                         </label>
//                         <input type="text" placeholder='Enter your username' className='input input-bordered w-full h-10' />
//                     </div>
                    
//                     {/* password div */}
//                     <div>
//                         <label className='label p-2'>
//                             <span className='label-text text-base'>
//                                 password
//                             </span>
//                         </label>
//                         <input type="password" placeholder='Enter your password' className='input input-bordered w-full h-10' />
//                     </div>

//                     {/* submit button div */}
//                     <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//                         Don't have an account?
//                     </a>
//                     <div>
//                         <button className='btn btn-block btn-sm mt-2'>Login</button>
//                     </div>
//                 </form>
//             </div>

//         </div>
//     )
// }

// export default Login