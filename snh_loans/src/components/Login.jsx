import React from 'react';
import logoIcon from '../images/sng 2 2.png';
import backgroundHero1 from '../images/SNG Background Home Page Icon.png';
import backgroundHero2 from '../images/SNG Background HomePage.png';
import GreenCircle from '../images/GreenCircle.png';


const Login = () => {
  return (
    <div className="absolute bg-[#0CA579] min-h-[910px] w-[1920px] ml-[-350px] mt-[-50px]">
      {/* <nav className="flex justify-end items-center py-4 px-8">
        <a href="/about" className="text-white font-poppins font-bold text-lg mr-8 hover:text-gray-300">About</a>
        <a href="/contact" className="text-white font-poppins font-bold text-lg hover:text-gray-300">Contact</a>
      </nav> */}

      <div className="relative flex flex-col items-start min-h-screen px-16">
        {/* Logo Image */}
        <img
          src={logoIcon}
          alt="Logo"
          className="absolute"
          style={{
            width: '188px',
            height: '69px',
            top: '40px',
            left: '45px',
            zIndex: 9,
          }}
        />

        <img
          src={GreenCircle}
          alt="Logo"
          className="absolute rounded-full"
          style={{
            width: '470.67px',
            height: '470.67px',
            top: '440px',
            left: '1300px',
            zIndex: 9,
          }}
        />

       

        <h1 className='mt-[80px] ml-[1503px]'>Don’t have an account?<span className='text-[#FFFFFF]'> <a href='SignUp'>Sign up!</a></span></h1>
        

        {/* Main Content */}
        <div className="flex flex-col items-start mt-[100px] ml-[600px] space-y-8">
          {/* Welcome Text */}
          <div className="text-left">
            <h3 className="text-6xl font-bold text-white mb-[100px]">Welcome Back!</h3>
            <h3 className="text-1xl font-bold text-white mt-[-50px] ml-[150px]">Login into your account</h3>
          </div>

          {/* Email Input (Outlined) */}
          <div className="relative h-11 w-64">
          <div class="w-full max-w-sm min-w-[533.33px]">
         <input class="w-full bg-[#FFFFFF] placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Email" />
         </div>
          </div>

          {/* Password Input (Outlined) */}
          <div className="relative h-11 w-64">
          <div class="w-full max-w-sm min-w-[533.33px]">
         <input class="w-full bg-[#FFFFFF] placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Password" />
         </div>
          </div>


          <div className='flex flex-row'>
            <div className='bg-[#FFFFFF] w-[53.33px] h-[26.67px] rounded-full mt-[50px]'></div>
            <p className='ml-[10px] mt-[50px]'>Remember me</p>
            <p className='text-[#D93F21] ml-[230px] mt-[50px]'>Recover Password</p>

          </div>

          {/* Log In Button */}
          <div>
            <button className="bg-[#32CD32] text-white p-3 w-[250px] mt-20 ml-[140px] rounded-md">
              Log In
            </button>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Login;
