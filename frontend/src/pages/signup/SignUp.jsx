import React from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import useSignUp from '../../hooks/useSignUp'

const SignUp = () => {
    //inputs initialized to null strings
    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: ""
    })

    //gender checkbox change method callback
    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender })
    }

    //calling use signup hook
    const { loading, signup } = useSignUp();
    //calling signup function
    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    };

    return (
        <div className='flex flex-col items-center justify-center min-w-96 min-h-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-indigo-800 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20'>
                <h1 className='text-3xl font-bold text-center text-gray-300'>
                    Sign Up
                    <span className='text-blue-500'> K_Chat</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    {/* Full Name div */}
                    <div>
                        <label className='label p-2'>
                            <span className='label-text text-base'>
                                Full Name
                            </span>
                        </label>
                        <input type="text" placeholder='Enter your Full Name' className='input input-bordered w-full h-10'
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                        />
                    </div>

                    {/* Username div */}
                    <div>
                        <label className='label p-2'>
                            <span className='label-text text-base'>
                                Username
                            </span>
                        </label>
                        <input type="text" placeholder='Enter your user_name' className='input input-bordered w-full h-10'
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
                    </div>


                    {/* password div */}
                    <div>
                        <label className='label p-2'>
                            <span className='label-text text-base'>
                                Password
                            </span>
                        </label>
                        <input type="password" placeholder='Enter your password' className='input input-bordered w-full h-10'
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>

                    {/* confirm password div */}
                    <div>
                        <label className='label p-2'>
                            <span className='label-text text-base'>
                                Confirm Password
                            </span>
                        </label>
                        <input type="password" placeholder='Confirm your password' className='input input-bordered w-full h-10'
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>

                    {/* submit button div */}
                    <GenderCheckBox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
                    <Link to="/login" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                        Already have an account?
                    </Link>
                    <div>
                        <button className='btn btn-block btn-sm mt-2 border border-slate-700'
                            disabled={loading}>
                            {loading?<span className='loading loading-spinner'></span>:"Sign Up"}
                        </button>
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