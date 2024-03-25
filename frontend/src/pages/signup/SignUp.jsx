import React from 'react'
import GenderCheckBox from './GenderCheckBox'

const SignUp = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 min-h-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-indigo-800 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20'>
                <h1 className='text-3xl font-bold text-center text-gray-300'>
                    Sign Up
                    <span className='text-blue-500'> K_Chat</span>
                </h1>

                <form>
                    {/* Full Name div */}
                    <div>
                        <label className='label p-2'>
                            <span className='label-text text-base'>
                                Full Name
                            </span>
                        </label>
                        <input type="text" placeholder='Enter your Full Name' className='input input-bordered w-full h-10' />
                    </div>

                    {/* Username div */}
                    <div>
                        <label className='label p-2'>
                            <span className='label-text text-base'>
                                Username
                            </span>
                        </label>
                        <input type="text" placeholder='Enter your user_name' className='input input-bordered w-full h-10' />
                    </div>


                    {/* password div */}
                    <div>
                        <label className='label p-2'>
                            <span className='label-text text-base'>
                                Password
                            </span>
                        </label>
                        <input type="password" placeholder='Enter your password' className='input input-bordered w-full h-10' />
                    </div>

                    {/* confirm password div */}
                    <div>
                        <label className='label p-2'>
                            <span className='label-text text-base'>
                                Confirm Password
                            </span>
                        </label>
                        <input type="password" placeholder='Confirm your password' className='input input-bordered w-full h-10' />
                    </div>

                    {/* submit button div */}
                    <GenderCheckBox/>
                    <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                        Already have an account?
                    </a>
                    <div>
                        <button className='btn btn-block btn-sm mt-2'>Sign Up</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default SignUp







// // STARTER CODE FOR SIGN UP
// const SignUp = () => {
//     return (
//         <div className='flex flex-col items-center justify-center min-w-96 min-h-96 mx-auto'>
//             <div className='w-full p-6 rounded-lg shadow-md bg-indigo-800 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20'>
//                 <h1 className='text-3xl font-bold text-center text-gray-300'>
//                     Sign Up
//                     <span className='text-blue-500'> K_Chat</span>
//                 </h1>

//                 <form>
//                     {/* Full Name div */}
//                     <div>
//                         <label className='label p-2'>
//                             <span className='label-text text-base'>
//                                 Full Name
//                             </span>
//                         </label>
//                         <input type="text" placeholder='Enter your Full Name' className='input input-bordered w-full h-10' />
//                     </div>

//                     {/* Username div */}
//                     <div>
//                         <label className='label p-2'>
//                             <span className='label-text text-base'>
//                                 Username
//                             </span>
//                         </label>
//                         <input type="text" placeholder='Enter your user_name' className='input input-bordered w-full h-10' />
//                     </div>


//                     {/* password div */}
//                     <div>
//                         <label className='label p-2'>
//                             <span className='label-text text-base'>
//                                 Password
//                             </span>
//                         </label>
//                         <input type="password" placeholder='Enter your password' className='input input-bordered w-full h-10' />
//                     </div>

//                     {/* confirm password div */}
//                     <div>
//                         <label className='label p-2'>
//                             <span className='label-text text-base'>
//                                 Confirm Password
//                             </span>
//                         </label>
//                         <input type="password" placeholder='Enter your password' className='input input-bordered w-full h-10' />
//                     </div>

//                     {/* submit button div */}
//                     <GenderCheckBox/>
//                     <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//                         Already have an account?
//                     </a>
//                     <div>
//                         <button className='btn btn-block btn-sm mt-2'>Sign Up</button>
//                     </div>
//                 </form>

//             </div>
//         </div>
//     )
// }

// export default SignUp