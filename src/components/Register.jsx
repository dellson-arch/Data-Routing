import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { Auth } from '../context/AuthContext';

const Register = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    mode : 'onChange'
  });

   const{setRegisteredUser , registeredUser} = useContext(Auth)

   const navigate = useNavigate()
  
  const handleFormSubmit = (data) => {
    console.log("Form Data:", data);
    const newUser = [...registeredUser , data]
    setRegisteredUser(newUser)
    localStorage.setItem('registeredUsers-->' , JSON.stringify(newUser))
    toast.success('Registered Successfully')
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
          {/* Name Field */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Name</label>
            <input 
              {...register('name', { required: "Name is required" })}
              type="text" 
              placeholder="Nayan" 
              className={`w-full border-b bg-transparent py-2 text-white placeholder-gray-500 outline-none transition-all ${errors.name ? 'border-rose-400' : 'border-white/20 focus:border-white'}`}
            />
            {errors.name && <p className={errorStyle}>{errors.name.message}</p>}
          </div>
          
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

          {/* Confirm Password */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Confirm Password</label>
            <input 
              {...register('cnfpassword', {
                required: "Please confirm your password",
              })}
              type="password" 
              placeholder="••••••••" 
              className={`w-full border-b bg-transparent py-2 text-white placeholder-gray-500 outline-none transition-all ${errors.cnfpassword ? 'border-rose-400' : 'border-white/20 focus:border-white'}`}
            />
            {errors.cnfpassword && <p className={errorStyle}>{errors.cnfpassword.message}</p>}
          </div>

          {/* Submit Button */}
          <button className="w-full mt-4 rounded-xl bg-white/10 py-3 font-bold text-white transition-all hover:bg-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-[0.97] border border-white/20">
            Sign Up
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-300/80">
          Already have an account?{' '}
          <a onClick={()=> navigate('/')} className="font-bold text-white hover:text-white/80 transition-colors underline-offset-4 hover:underline ">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;