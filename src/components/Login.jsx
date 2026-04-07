import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router';
import { Auth } from '../context/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
  const { register, handleSubmit, reset, formState: { errors} } = useForm({
    mode:'onChange',
  });

   const navigate = useNavigate()

   const{ registeredUser , setLoginUser} = useContext(Auth)

  const handleFormSubmit = (data) => {
    const user = registeredUser.find(
      (elem)=> elem.email === data.email && elem.password === data.password
    )

    if(!user){
      toast.error("user not found")
      reset()
      return
    }
    setLoginUser(user)// user ek baar me ek hi login hoga isliye mai isme koi copy wagera nahi karunga seedha daal dunga user
    localStorage.setItem("Logged user-->" , JSON.stringify(user))
    navigate('/dashboard')
    console.log("Form Data:", data);
    toast.success('user logged in')
    reset();  
  };


  // Common error style for glassmorphism
  const errorStyle = "mt-1 text-xs font-medium text-rose-300 drop-shadow-[0_0_5px_rgba(225,29,72,0.5)]";

  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-gray-900 px-4">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80')" }}
      >
        <div className="h-full w-full bg-black/50"></div>
      </div>

      {/* Glassmorphism Card */}
      <div className="relative z-10 w-full max-w-md rounded-2xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
        
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-3xl font-bold text-white tracking-tight">Create Account</h2>
          <p className="text-sm text-gray-200/70">Enter your details to get started.</p>
        </div>

        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-5">
          
          {/* E-mail Field */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">E-mail</label>
            <input
              {...register('email', { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })} 
              type="email" 
              placeholder="hello@example.com" 
              className={`w-full border-b bg-transparent py-2 text-white placeholder-gray-500 outline-none transition-all ${errors.email ? 'border-rose-400' : 'border-white/20 focus:border-white'}`}
            />
            {errors.email && <p className={errorStyle}>{errors.email.message}</p>}
          </div>
           
          {/* Password Field */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Password</label>
            <input 
              {...register('password', {
                required: "Password is required",
                minLength: { value: 6, message: "Min 6 characters please" },
                maxLength: { value: 12, message: "Too long! Max 12 characters" }
              })}
              type="password" 
              placeholder="••••••••" 
              className={`w-full border-b bg-transparent py-2 text-white placeholder-gray-500 outline-none transition-all ${errors.password ? 'border-rose-400' : 'border-white/20 focus:border-white'}`}
            />
            {errors.password && <p className={errorStyle}>{errors.password.message}</p>}
          </div>


          {/* Submit Button */}
          <button className="w-full mt-4 rounded-xl bg-white/10 py-3 font-bold text-white transition-all hover:bg-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-[0.97] border border-white/20">
            Sign in
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-300/80">
          Don't have an account?{' '}
          <a  onClick={()=> navigate('/register')} className="font-bold text-white hover:text-white/80 transition-colors underline-offset-4 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;