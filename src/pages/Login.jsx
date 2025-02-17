import { useState } from "react";
import { UserIcon, EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/solid";

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <>
    <title>AIgnite - Sign in</title>
    <section className="flex items-center justify-center px-6 mt-15">
      <div className="bg-white shadow-lg rounded-xl p-8 md:p-12 w-full max-w-lg">
        {/* Toggle Buttons */}
        <div className="flex justify-center mb-6 space-x-4">
          <button 
            className={`px-6 py-2 rounded-md text-lg font-semibold transition-all focus:outline-none 
            ${!isSignUp 
              ? 'bg-[#1D4ED8] text-white shadow-md'  // active sign in state
              : 'text-gray-600 border border-[#205AFA] hover:bg-[#E5EDFF] hover:text-[#205AFA]'} // inactive sign in
            `}
            onClick={() => setIsSignUp(false)}>
            Sign In
          </button>
          
          <button 
            className={`px-6 py-2 rounded-md text-lg font-semibold transition-all focus:outline-none 
            ${isSignUp 
              ? 'bg-[#1D4ED8] text-white shadow-md'  // active sign up
              : 'text-gray-600 border border-[#205AFA] hover:bg-[#E5EDFF] hover:text-[#205AFA]'} // inactive sign up
            `}
            onClick={() => setIsSignUp(true)}>
            Sign Up
          </button>
        </div>

        {/* Form */}
        <h1 className="text-gray-700 text-3xl font-bold text-center">{isSignUp ? "Create an Account" : "Welcome Back"}</h1>
        <p className="text-gray-600 text-center mt-2">{isSignUp ? "Sign up to get started" : "Sign in to continue"}</p>

        <form className="mt-6 space-y-4">
          {isSignUp && (
            <div className="relative">
              <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
              <input 
                type="text" 
                placeholder="Name" 
                autoComplete="name" 
                required 
                className="w-full border border-gray-300 rounded-lg p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-[#205AFA]"
              />
            </div>
          )}

          <div className="relative">
            <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
            <input 
              type="email" 
              placeholder="Email" 
              autoComplete="email" 
              required 
              className="w-full border border-gray-300 rounded-lg p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-[#205AFA]"
            />
          </div>

          <div className="relative">
            <LockClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
            <input 
              type="password" 
              placeholder="Password" 
              autoComplete="current-password" 
              required 
              className="w-full border border-gray-300 rounded-lg p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-[#205AFA]"
            />
          </div>

          {isSignUp && (
            <div className="relative">
              <LockClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
              <input 
                type="password" 
                placeholder="Confirm Password" 
                autoComplete="confirm-password" 
                required 
                className="w-full border border-gray-300 rounded-lg p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-[#205AFA]"
              />
            </div>
          )}

          {!isSignUp && (
            <div className="text-right text-sm">
              <a href="#" className="text-[#205AFA] hover:underline">Forgot password?</a>
            </div>
          )}

          <button className="w-full btn-primary cursor-pointer text-white font-semibold py-3 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]">
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
      </div>
    </section>
    </>
  );
}

export default Login;
