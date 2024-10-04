import React from 'react'
import logoIcon from '../images/sng 2 2.png';
// import Hero1 from '../images/young Individual 4.png';
import backgroundHeroIcon from '../images/SNG Background Home Page Icon.png';
import { motion } from 'framer-motion';
import Hero1 from '../images/smile lady landing 1.png';









const Home = () => {
  return (
    <div className="absolute bg-[#0CA579] min-h-[1020px] w-[1920px] ml-[-340px] mt-[-100px]">
        <nav className="flex justify-end items-center py-4 px-8">
        <a href="/login" className="text-white font-poppins font-bold text-lg mr-8 hover:text-gray-300">Login</a>
        </nav>

    
      
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

        
        {/* Main Content */}
        <div className="flex flex-col items-start mt-[350px] ml-[5px] space-y-8">

        <button className='bg-[#E7F4FF] text-[#0CA579] text-sm p-3 w-64 -mt-[82px]  rounded-full w-md h-14'>
        Short term Loans
         </button>


          {/* Welcome Text */}
          <div className="text-left">
            <h2 className="text-5xl font-bold  text-white">Nix! Mapara!  <br/>Use SNG Financials instant payday loan to take <br/>full control with flexible repayment options.</h2>
          </div>

          <div className="text-left">
            <h2 className="text-1xl  text-white"><br/>SNG Financial offers instant and hassle-free payday loans with low<br/>interest rates and flexible repayment terms <span className='font-bold text-white'>Learn More</span></h2>
          </div>

       




        <button className="bg-[#32CD32] text-white text-lg p-4 w-[190px] hover:bg-[white] hover:text-[#32CD32] rounded-full transition-colors duration-300">
          Apply Now
        </button>
        </div>

        <div >
          <img
          src={backgroundHeroIcon}
          className='absolute'
            style={{
              width: '696px',
              height: '717px',
              top: '140px',
              left: '1171px',
              zIndex: 7,
            }}
          />

          <motion.img
           initial={{ opacity: 0, scale: 0.5 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{
             duration: 0.3,
             delay: 1,
             ease: [0, 0.71, 0.2, 1.01]
           }}
          src={Hero1}
          className='absolute'
          style={{
            width: '696px',
            height: '817px',
            top: '150px',
            left: '1171px',
            zIndex: 8,
          }}
          />
        </div>


        </div>
   </div>
    
  )
}

export default Home