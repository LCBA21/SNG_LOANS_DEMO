import React from 'react';
import InstaIcon from '../images/Instagram.png';
import FacebookIcon from '../images/Facebook.png';
import TwitterIcon from '../images/Twitter.png';
import YoutubeIcon from '../images/Youtube.png';



const Help = () => {
  return (
    <div className="absolute bg-[#0CA579] min-h-[500px] w-[1920px] ml-[-340px] mt-[-100px]">
      <div className="flex flex-col items-start">
        <h1 className="text-5xl text-[#FFFFFF] mt-[100px] ml-[820px] font-bold">SNG here to help:</h1>

        <p className="text-2xl text-[#FFFFFF] mt-[50px] ml-[520px]">
          View your latest loan application status, balances, statements, and more!
        </p>
        <p className="text-2xl text-[#FFFFFF] mt-[20px] ml-[520px]">
          Simply Login to your account to access a variety of self-service options including:
        </p>

        <nav className="text-2xl text-[#FFFFFF] mt-[20px] ml-[520px]">
          <ul className="list-disc ml-5">
            <li>Latest loan application status</li>
            <li>Current loan balance</li>
            <li>Account statements</li>
            <li>Paid-up letters</li>
          </ul>
        </nav>

        <p className="text-2xl text-[#FFFFFF] mt-[40px] ml-[520px]">
          Need help with something else? For issues like password reset or settlement letters, you can:
        </p>

        <nav className="text-2xl text-[#FFFFFF] mt-[20px] ml-[520px]">
          <ul className="list-disc ml-5">
            <li><span className='absolute ml-100px'>Call us 086 123 4567</span></li>
            <li>Email us at customer@sng.co.za</li>
            <li>Visit our FAQ’s for answers to common questions.</li>
          </ul>
        </nav>
      </div>

      <footer className="bg-[#00EA90] mt-75  p-1 text-center mt-[90px] text-white h-100">
  <div className='flex flex-col'>
    
    {/* Modified to gap-x-40*/}
    <div className='flex flex-row justify-center gap-x-40 h-[290px]  items-center'>
      <div className='flex flex-col items-center mt-[-120px]'>
        <h1 className='font-bold text-2xl text-[#FFFFFF]'>Customer Care</h1>
        <p className='text-1xl text-[#FFFFFF] mt-2'>Help</p>
        <p className='text-1xl text-[#FFFFFF]'>Quick Loans</p>
        <p className='text-1xl text-[#FFFFFF]'>How to?</p>
      </div>

      <div className='flex flex-col items-center mt-[-120px]'>
        <h1 className='font-bold text-2xl text-[#FFFFFF]'>Our Story</h1>
        <p className='text-1xl text-[#FFFFFF] mt-2'>How it Started</p>
        <p className='text-1xl text-[#FFFFFF]'>News</p>
        <p className='text-1xl text-[#FFFFFF]'>Investors</p>
      </div>

      <div className='flex flex-col items-center mt-[-120px]'>
        <h1 className='font-bold text-2xl text-[#FFFFFF]'>Legal</h1>
        <p className='text-1xl text-[#FFFFFF] mt-2'>Terms and Conditions</p>
        <p className='text-1xl text-[#FFFFFF]'>Privacy</p>
      </div>

      <div className='flex flex-col items-center mt-[-120px]'>
        <h1 className='font-bold text-2xl text-[#FFFFFF]'>Keep in touch</h1>
        <div className='flex flex-row'>
            <img
            src={InstaIcon}
            style={{
                width: '48px',
                height: '48px',
                top: '564px',
                left: '830px',
                zIndex: 9,
                
              }}
            />
            
            <img
            src={FacebookIcon}
            style={{
                width: '48px',
                height: '48px',
                top: '564px',
                left: '830px',
                zIndex: 9,
              }}
            />

            <img
            src={TwitterIcon}
            style={{
                width: '48px',
                height: '48px',
                top: '564px',
                left: '830px',
                zIndex: 9,
              }}
            />

            <img
            src={YoutubeIcon}
            style={{
                width: '48px',
                height: '48px',
                top: '564px',
                left: '830px',
                zIndex: 9,
              }}
            />

        </div>
      </div>
    </div>

  </div>
</footer>
    </div>
  );
};

export default Help;
