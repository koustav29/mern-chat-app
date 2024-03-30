import React from "react";
import { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useLogin = () => {
    console.log("useLogin called from Login.jsx")
    const [loading, setLoading] = useState(false);
    //initiating context setter instance
    const {setAuthUser} = useAuthContext();

    const login = async(username, password) => {
        const success = handleInputErrors(username, password);
        if(!success) return;
        setLoading(true)
        console.log("login called from Login.jsx", username, password)
        try {
            //api call to login api it's a promise
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({username, password})
            })
            const data = await res.json();
            if(data.error){
                throw new Error(data.error)
            }
            console.log("data from login API Call",data)
            //Now store the response data to local storage so that after login user stays logged in
            localStorage.setItem("chat-user", JSON.stringify(data))
            //set context
            setAuthUser(data);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false)
        }
    }
    return {loading, login}
}

export default useLogin;

function handleInputErrors(username, password) {
    if(!username || !password) {
      toast.error("Please fill all the fields!")
      return false
    }
    return true
  }