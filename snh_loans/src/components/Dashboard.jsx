import React from 'react'
import logoIcon from '../images/sng 2 2.png';
import ClockIcon from '../images/Clockicon.png';
import profile from '../images/ProfileRounded.png';








const Dashboard = () => {
  return (
    <div className="absolute bg-[#0CA579] min-h-[1110px] w-[1920px] ml-[-350px] mt-[-100px]">
      <div className='absolute bg-[#00EA90] mt-[68px] ml-[-1px] h-[102px] w-[1920px]'>
        <p className='absolute text-sm text-[#FFFFFF] ml-[760px] mt-[50px] '>You are pre-approved on your next short term loan</p>
        <button className='rounded-lg ml-[1100px] mt-[40px] bg-[#0CA579] h-[40px] w-[156px] text-[#FFFFFF]'>Apply Now</button>
      </div>

      <div className="flex justify-center items-center h-screen">
      <div className="border-l-2 border-green-300 h-[1200px] ml-[-1300px] "></div>
    </div>

  {/*   <div className="flex justify-center items-center h-screen">
      <div className="border-t-2 border-green-300 w-64 "></div>
    </div> */}

    <div className='absolute flex flex-col ml-[100px] mt-[-550px] space-y-[50px]'>
        <div className='text-2xl font-bold text-[#FFFFFF] '>Dashboard</div>
        <div className='text-2xl font-bold text-[#FFFFFF] ml-[-60px] mt-[70px]'>About</div>
        <div className='text-2xl font-bold text-[#FFFFFF]'>Statements</div>
        <div className='text-2xl font-bold text-[#FFFFFF] ml-[-60px]'>FAQ’s</div>
        <div className='text-2xl font-bold text-[#FFFFFF] ml-[-60px]'>Contact</div>
        <div className='text-2xl font-bold text-[#FFFFFF]'>Refer a friend</div>
        <div className='text-2xl font-bold text-[#FFFFFF]'></div>
        <div className=' text-[#FFFFFF] ml-[-10px] mt-[100px]'><p>Sign Out</p></div>
        <div></div>
        <div></div>
      </div>


      <div>
      <img
          src={logoIcon}
          alt="Logo"
          className="absolute"
          style={{
            width: '188px',
            height: '69px',
            top: '180px',
            left: '60px',
            zIndex: 9,
          }}
        />
      </div>


          <div>
       
          </div>


      <div className='absolute flex flex-row mt-[-650px] ml-[1610px] space-x-5 font-bold text-[#FFFFFF]'>
        {/* two divs required */}
        <div></div>
        <div></div>
        {/* single div required */}
        <div className='bg-[#FFFFFF] rounded-[32px]'></div>
        <img
          src={profile}
          alt="Profile"
          className="absolute rounded-[32px]"
          style={{
            width: '40px',
            height: '35px',
            top: '5px',
            left: '60px',
            zIndex: 9,
          }}
        />
        <img
          src={ClockIcon}
          alt="Logo"
          className="absolute"
          style={{
            width: '40px',
            height: '40px',
            top: '1px',
            left: '140px',
            zIndex: 9,
          }}
        />
      </div>

      <div className='absolute mt-[-500px] ml-[50px] flex flex-col'>
        <h1 className='text-5xl text-[#FFFFFF]'>Welcome Back Thabo!</h1>

        <h1 className='absolute text-2xl ml-[480px] mt-[140px] text-[#FFFFFF] font-bold'>Accounts Overview</h1>

        <div className='mt-[68px] ml-[1000px] space-x-20'>
        <button className='rounded-md w-[160px] h-[60px] bg-[#00EA90] text-1xl font-bold'><span  className='text-[#FFFFFF] text-1xl font-bold'>History</span></button>
        <button className='rounded-md w-[160px] h-[60px] bg-[#FFFFFF]'><span className='text-[#00EA90] text-1xl font-bold'>New Loan</span></button>
        </div>

        <div>
          <h1 className='absolute text-[#FFFFFF] text-3xl font-bold mt-[145px] ml-[480px]'>Short Term Loan - 123456373</h1>
          <h1 className='absolute text-[#FFFFFF] font-bold mt-[190px] ml-[480px]'>R1000.00</h1>
          <h1 className='absolute text-[#FFFFFF] text-4xl  font-bold mt-[300px] ml-[640px]'>R300.00</h1>
          <h1 className='text-[#FFFFFF] font-bold mt-[340px] ml-[20px]'>Outstanding  <br/> Balance</h1>

            <h1 className='text-[#FFFFFF] font-bold  mt-[-90px] ml-[700px] text-4xl'>R250.00</h1>
            <h1 className='text-[#FFFFFF] font-bold ml-[700px]'>Next Payment <br/> Amount</h1>
            <h1 className='text-[#FFFFFF] font-bold ml-[1300px] mt-[-90px] text-4xl'>25 Mar</h1>
            <h1 className='text-[#FFFFFF] font-bold ml-[1300px]'>Next Payment <br/> Amount</h1>
            <h1></h1>
        </div>

        {/* <div>
        <h1 className='absolute text-[#FFFFFF] text-3xl font-bold mt-[145px] ml-[440px]'>Short Term Loan - 123456373</h1>
        <h1 className='absolute text-[#FFFFFF] font-bold mt-[190px] ml-[440px]'>R2000.00</h1>
        <h1 className='absolute text-[#FFFFFF] text-4xl  font-bold mt-[300px] ml-[640px]'>R500.00</h1>
        <h1 className='text-[#FFFFFF] font-bold mt-[340px] ml-[20px]'>Outstanding  <br/> Balance</h1>
        <h1 className='text-[#FFFFFF] font-bold  mt-[-90px] ml-[700px] text-4xl'>R250.00</h1>
            <h1 className='text-[#FFFFFF] font-bold ml-[700px]'>Next Payment <br/> Amount</h1>
            <h1 className='text-[#FFFFFF] font-bold ml-[1300px] mt-[-90px] text-4xl'>25 Apr</h1>
            <h1 className='text-[#FFFFFF] font-bold ml-[1300px]'>Next Payment <br/> Amount</h1>
        </div> */}
      </div>
      
      
      </div>
  )
}

export default Dashboard
