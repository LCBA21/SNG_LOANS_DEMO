import React from 'react'
import logoIcon from '../images/sng 2 2.png';
import GreenCircle from '../images/GreenCircle.png';



const OTP = () => {
  return (
    <div className="absolute bg-[#0CA579] min-h-[1000px] w-[1920px] ml-[-340px] mt-[-50px]">

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

<div className="flex flex-col items-start mt-[210px] ml-[600px] space-y-8">
          {/* Welcome Text */}
          <div className="text-left">
            <h3 className="text-6xl font-bold text-white mb-[100px]">OTP Verification</h3>
            <h3 className="text-1xl font-bold text-white mt-[-50px] ml-[150px]">Enter OTP Code sent to ******@gmail.com</h3>
          </div>

          {/* Email Input (Outlined) */}
          <div className="relative h-11 w-64">
          <div class="w-full max-w-sm min-w-[533.33px]">
         <input class="w-full bg-[#FFFFFF] placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="OTP" />
         </div>
          </div>

          {/* Log In Button */}
          <div>
            <button className="bg-[#32CD32] text-white p-3 w-[250px] mt-10 ml-[140px] rounded-md">
              Submit
            </button>
          </div>
        </div>


      
    </div>
  )
}

export default OTP
