import React, { useState, useEffect } from 'react';
import PlusIcon from '../images/Plus.png';

const Calculator = () => {
  // State for the loan amount and duration sliders
  const [loanAmount, setLoanAmount] = useState(2500); // Initialize with R2500
  const [loanDuration, setLoanDuration] = useState(0); // Initialize with 3 Months
  const [interestandFees, setInterestandFees] = useState(0); // Initialize interest and fees state
  const [totalrepayment, setTotalRepayment] = useState(0); // Initialize interest and fees state

  // Calculate interest and fees whenever loanAmount or loanDuration changes
  useEffect(() => {
    // Ensure the loan amount is at least R500
    if (loanAmount < 500) {
      setLoanAmount(500);
      return;
    }
  
    // Calculate interest based on 20% per R100
    const interest = Math.floor(loanAmount / 100) * 20;
  
    // Fixed administration fee per transaction
    const adminFee = 15.50;
  
    // Calculate total repayment including interest, loan amount, and admin fee
    const totalRepayment = loanAmount + interest + adminFee;
  
    // Set interest and fees, rounded to 2 decimal places
    setInterestandFees((interest + adminFee).toFixed(2));
  
    // Set total repayment, rounded to 2 decimal places
    setTotalRepayment(totalRepayment.toFixed(2));
  }, [loanAmount]);
  

  return (
    <div className="absolute bg-[#0CA579] min-h-[1100px] w-[1920px] ml-[-340px] mt-[-100px]">
      <div className="relative flex flex-col justify-center items-center h-full w-full mt-[200px]">
        <div className="bg-white rounded-lg shadow-lg w-[989px] h-[800px] p-8">
          <h1 className='text-4xl font-bold'>
            How Much Would You Like <span className='text-[#54D4A0] font-bold'>To Borrow?</span>
          </h1>
          <div className="flex flex-col justify-start">
            {/* Loan Amount Section */}
            <div className="flex flex-col justify-start w-full mt-[148px] ml-[350px]">
              <div className="flex justify-start text-green-700">
                <label className="absolute text-4xl mt-[60px] ml-[-260px] font-bold text-[#00EA90]">
                  R{loanAmount}
                </label>
              </div>
            </div>

            {/* Loan Amount Slider */}
            <div className="flex flex-col w-full mt-1">
              <input
                id="loan-amount-range"
                type="range"
                value={loanAmount}
                min="500"  // Set minimum to 500
                max="3000" // Set maximum to 3000
                step="100" // Increment by 100 for smoother control
                onChange={(e) => setLoanAmount(parseInt(e.target.value))} // Ensure value is an integer
                className="absolute w-60 h-2 mb-6 ml-1 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              />
            </div>

            {/* Loan Duration Section */}
            <div className="flex flex-col justify-start w-full mt-[210px] ml-[350px]">
              <div className="flex justify-start text-green-700">
                <label className="absolute text-4xl mt-[60px] ml-[-300px] font-bold text-[#00EA90]">
                  {loanDuration} Days
                </label>
              </div>
            </div>

            {/* Loan Duration Slider */}
            <div className="flex flex-col w-full mt-1">
              <input
                id="loan-duration-range"
                type="range"
                value={loanDuration}
                min="1"
                max="31"
                step="1"
                onChange={(e) => setLoanDuration(e.target.value)}
                className="absolute w-60 h-2 mb-6 ml-1 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              />
            </div>

            {/* Interest and Deposit Date */}
            <p className='absolute text-[#54D4A0] mt-[510px] ml-[-310]'>Interest</p>
            <p className='absolute text-[#54D4A0] mt-[510px] ml-[260px]'>Deposit Date</p>
            <p className='absolute text-[#808080] mt-[380px] ml-[10px] text-sm'>7 Days</p>
            <p className='absolute text-[#808080] mt-[380px] ml-[190px] text-sm'>31 Days</p>
            <p className='absolute text-[#636363] mt-[328px] ml-[5px] text-sm'>Payment Period</p>
            <p className='absolute text-[#636363] mt-[120px] ml-[5px] text-sm'>Borrow Amount</p>
            <p className='absolute text-[#000000] mt-[640px] ml-[60px] font-bold text-sm'>Deposit Bank Transfer</p>
            <p className='absolute text-[#636363] mt-[170px] ml-[5px] text-sm'>R500</p>
            <p className='absolute text-[#636363] mt-[170px] ml-[200px] text-sm'>R3000</p>
            <div className='absolute rounded-full mt-[638px] ml-[10px] bg-[#00EA90] w-[24px] h-[24px]'></div>
            <div className='absolute rounded-full mt-[643px] ml-[15px] bg-[#FFFFFF] w-[14px] h-[14px] z-[8]'></div>
            <p className='absolute text-[#000000] font-bold text-2xl mt-[580px] ml-[8px]'>20%</p>
            <hr className="absolute w-[350px] h-[5px] mt-[550px] ml-[10px] bg-gray-200 border-0 dark:bg-gray-700" />
            <div className='absolute w-[24px] h-[24px] rounded-full mt-[580px] ml-[8px]'></div>

            {/* Apply Now Button */}
            <div className="flex justify-start ml-[540px] space-y-50">
              <button className="absolute bg-[#32CD32] text-white text-lg p-4 w-[245px] h-[78px] rounded-full transition-colors duration-300 mt-[190px] ml-[80px]">
                Apply Now
              </button>
            </div>
          </div>

          {/* Total Repayment Section */}
          <div className="mt-[-20px]">
            <h1 className="absolute text-[#000000] font-bold text-3xl ml-[600px] mt-[-208px]">
              Total Repayment
            </h1>
            <p className="absolute text-[#54D4A0] text-7xl font-bold ml-[572px] mt-[-150px]">
              R {totalrepayment}
            </p>
            <p className="absolute text-[#000000] font-bold ml-[680px] mt-[-80px]">Fees Include</p>
            <div className='w-[289px] h-[120px] ml-[600px] bg-[#F6F6F6]'>
              <h1 className='text-[#000000] text-1xl font-bold w-[258px] h-[20px]'>INTEREST AND FEES</h1>
              <h1 className='text-[#000000] text-5xl font-bold w-[258px] h-[20px] mt-[40px]'> R {interestandFees}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
