import React from 'react'
import clip from '../images/Clip path group.png';

const Apply = () => {
  return (
    <div className="absolute bg-[#0CA579] min-h-[1100px] w-[1920px] ml-[-340px] mt-[-100px]">
      <div className="relative flex flex-col justify-center items-center h-full w-full">

        {/* Container that centers its children */}
        <div className='flex justify-center items-center w-full'>

          {/* White container with rounded edges */}
          <div className='absolute bg-white rounded-lg  mb-80 shadow-lg w-[450px] h-[380px] mt-[180px] ml-[-1000px]'>
              <h1 className='text-left text-5xl font-bold text-green-700 ml-10 mt-8'>How To Apply</h1>
              <br />
              <h1 className='text-left text-5xl font-bold text-green-700 ml-10 mt-1'>For Your Loan</h1>
              <br />
              <h1 className='text-left text-5xl font-bold text-green-700 ml-10  '>Now!</h1>
        </div>

        <div>
          <div className='bg-white rounded-lg  mt-[250px] mb-20 ml-40 shadow-lg w-[450px] h-[120px] rounded-lg'>
          <h3 className='text-2xl text-left font-bold text-green-700 ml-3'>Step 1.</h3>
          <p className=' text-left text-green-700 mt-2 ml-3'>Complete the loan calculator</p>
          <p className=' text-left  text-green-700 ml-3 '>application.</p>
          </div>

          <div className='bg-white rounded-lg mt-[110px] mb-20 ml-40  shadow-lg w-[450px] h-[120px] rounded-lg'>
          <h3 className='text-2xl text-left font-bold text-green-700 ml-3'>Step 2.</h3>
          <p className=' text-left text-green-700 mt-2 ml-3'>Select Apply, Fill in your details</p>
          <p className=' text-left  text-green-700 ml-3 '>and upload Documents.</p>
          </div>
          <div className='bg-white rounded-lg  mt-[120px] mb-20 ml-40  shadow-lg w-[450px] h-[120px] rounded-lg'>
          <h3 className='text-2xl text-left font-bold text-green-700 ml-3 '>Step 3.</h3>
          <p className=' text-left text-green-700 mt-2 ml-3'>Signup and login into sng.com.</p>
          <p className=' text-left  text-green-700 ml-3 '>View dashboard and wait for</p>       
          <p className=' text-left  text-green-700 ml-3 '>approval in less than 48 Hours.</p>         
          </div>
        </div>


          {/* Clip image */}
   
        </div>

        <div>
        <img
            src={clip}
            alt="Clip decoration"
            className='absolute'
            style={{
              width: '250px',
              height: '236px',
              top: '180px',
              left: '550px',
              zIndex: 7,
            }}
          />


          <img
            src={clip}
            alt="Clip decoration"
            className='absolute'
            style={{
              width: '250px',
              height: '236px',
              top: '410px',
              left: '550px',
              zIndex: 7,
            }}
          />

          <img
            src={clip}
            alt="Clip decoration"
            className='absolute'
            style={{
              width: '250px',
              height: '236px',
              top: '630px',
              left: '550px',
              zIndex: 7,
            }}
          />



{/* 
width: 250px;
    height: 236px;
    top: 176px;
    left: 405px;
    z-index: 7; */}
        </div>

        {/* Another flex container with left and right alignment */}
        {/* <div className='flex justify-between w-full px-16 mt-8'>
          <div className='bg-green-400 p-4 rounded-lg'>Left Aligned Content</div>
          <div className='bg-green-400 p-4 rounded-lg'>Right Aligned Content</div>
        </div> */}

      </div>
    </div>
  )
}

export default Apply;
