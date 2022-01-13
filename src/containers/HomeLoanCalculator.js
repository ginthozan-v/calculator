import React, { useState } from 'react'
import { DotLoader } from 'react-spinners'
import Vector from '../assets/image/Calculator-bro.svg'
import { css } from "@emotion/react";
const override = css`
  display: block;
  margin: 0 auto;
`;

const HomeLoanCalculator = () => {
    const [loading, setLoading] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [color, setColor] = useState("#cfcfcf");

    return (
        <>
            <div className='bg-black sm:col-span-2 row-span-2 p-8 sm:p-14 lg:p-8 xl:p-14 text-white'>
                <div className={`h-96 ${ loaded ? 'hidden lg:block' : 'block' }`}>
                    <div className='border-b border-slate-600 pb-1'>
                        <h1 className='font-extrabold text-4xl'>Home Loan Calculator</h1>
                        <p>By providing basic information about the housing loan you are interested, we help you estimate your home loan repayments. </p>
                    </div>

                    {/* <div className="pt-16">
                        <div className="grid grid-cols-6 gap-5 sm:gap-10">
                            <div className="col-span-6 sm:col-span-3">
                                <CurrencyInputField setValue={setBasicSalary} value={basicSalary} name="basic salary" />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <CurrencyInputField setValue={setAllowance} value={allowances} name="allowance" />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <CurrencyInputField setValue={setSalaryAdvance} value={salaryAdvance} name="salary advance" />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <CurrencyInputField setValue={setStaffLoan} value={staffLoan} name="staff loan" />
                            </div>
                            <div className="col-span-6">
                                <button onClick={calculate} className='bg-sky-400 block w-full py-3 rounded-none'>Calculate</button>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div >
            <div className=' bg-slate-100 lg:col-span-2 xl:col-span-1 px-14 flex flex-col justify-center row-span-2'>
                {loading ?
                    <div className='flex h-96 lg:h-full items-center justify-center '>
                        <DotLoader color={color} loading={loading} css={override} size={60} margin={2} />
                    </div>

                    : loaded ?
                        <div className='lg:h-96'>
                            {/* <div className='border-b border-slate-300 my-4'>
                                <p className='text-zinc-900 font-bold text-lg text-center underline decoration-zinc-400 decoration-2'>Net Salary</p>
                                <p className='text-zinc-900 font-extrabold text-2xl text-center mt-2'>{numberWithCommas(netSalary)}</p>
                            </div>
                            <div className='border-b border-slate-300 my-4'>
                                <p className='text-zinc-900 font-bold text-lg text-center underline decoration-zinc-400 decoration-2'>Employee Contribution</p>
                                <div className='flex items-center justify-between mt-4'>
                                    <p className='text-zinc-900 font-extrabold text-lg text-center mt-2'>EPF (8%)</p>
                                    <p className='text-zinc-900 font-extrabold text-lg text-center mt-2'>{numberWithCommas(employeeEPF)}</p>
                                </div>
                            </div>
                            <div className='border-b border-slate-300 my-4'>
                                <p className='text-zinc-900 font-bold text-lg text-center underline decoration-zinc-400 decoration-2'>Employer Contribution</p>
                                <div className='flex items-center justify-between mt-4'>
                                    <p className='text-zinc-900 font-extrabold text-lg text-center mt-2'>EPF (12%)</p>
                                    <p className='text-zinc-900 font-extrabold text-lg text-center mt-2'>{numberWithCommas(employerEPF)}</p>
                                </div>
                                <div className='flex items-center justify-between mt-4'>
                                    <p className='text-zinc-900 font-extrabold text-lg text-center mt-2'>ETF (3%)</p>
                                    <p className='text-zinc-900 font-extrabold text-lg text-center mt-2'>{numberWithCommas(employerETF)}</p>
                                </div>
                            </div>
                            <div className="col-span-6 my-4 ">
                                <button onClick={reset} className='bg-sky-400 block w-full py-3 rounded-none'>Reset</button>
                            </div> */}
                        </div> :
                        <div className='h-12 sm:h-auto'>
                            <object type="image/svg+xml" data={Vector} className='hidden lg:block'>svg-animation</object>
                        </div>
                }
            </div>
        </>
    )
}

export default HomeLoanCalculator
