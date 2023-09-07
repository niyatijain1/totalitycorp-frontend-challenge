import React from 'react'
import  google from '../assests/google-chrome-icon-3124.png'
import { ToastContainer,toast } from 'react-toastify';
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
}from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../redux/shopoholicsSlice';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const dispatch = useDispatch()
    const navigate= useNavigate()
    const auth = getAuth()
    const provider = new GoogleAuthProvider();
    const handleGoogleLogin=(e)=>{
        e.preventDefault();
        signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    dispatch(addUser({
        _id: user.uid,
        name: user.displayName,
        email: user.email,
      image: user.photoURL,
    }));
    setTimeout(()=>{
      navigate("/")
    },1500)
  
  }).catch((error) => {
  
    const errorCode = error.code;
    const errorMessage = error.message;

    const email = error.customData.email;

    const credential = GoogleAuthProvider.credentialFromError(error);
  
  });    
    };

    const handleSignOut=()=>{
        signOut(auth).then(() => {
            toast.success("Logged out successfully")
            dispatch(removeUser())
          }).catch((error) => {
            console.log("An error happened.")
          });
    }
  return (
    <div className='w-full flex flex-col items-center gap-10 py-20'>
      <div className='w-full flex items-center justify-center gap-10' >
        <div onClick={handleGoogleLogin}className='text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300'>
        <img className="w-8" src={google} alt="googlelogo" />
        <span className='text-sm text-gray-900'>Sign in with Google</span>
        </div>
        <button  onClick={handleSignOut} className='bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300 '>Sign Out</button>
      </div>
      <ToastContainer 
     position="top-left"
     autoClose={2000}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick rtl={false}
     pauseOnFocusLoss draggable pauseOnHover theme="dark"/>
    </div>
  )
}

export default Login
