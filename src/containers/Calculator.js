import React, { useState } from 'react'
import Spinner from '../components/Spinner';

const Calculator = () => {
    const [basicSalary, setBasicSalary] = useState('');
    const [allowances, setAllowance] = useState('');
    const [salaryAdvance, setSalaryAdvance] = useState('');
    const [staffLoan, setStaffLoan] = useState('');
    const [netSalary, setNetSalary] = useState('');
    const [employeeEPF, setEmployeeEPF] = useState('');
    const [employerEPF, setEmployerEPF] = useState('');
    const [employerETF, setEmployerETF] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    const calculate = () => {
        setIsLoading(true)
        const employee_epf = (basicSalary / 100) * 8;
        const employer_epf = (basicSalary / 100) * 12;
        const employer_etf = (basicSalary / 100) * 3;
        let net_salary = (basicSalary - employee_epf);

        if (allowances) {
            net_salary = +net_salary + +allowances;
        }
        if (salaryAdvance) {
            net_salary = net_salary - salaryAdvance;
        }
        if (staffLoan) {
            net_salary = net_salary - staffLoan;
        }

        setNetSalary(net_salary)
        setEmployeeEPF(employee_epf)
        setEmployerEPF(employer_epf)
        setEmployerETF(employer_etf)
    }

    const reset = () => {
        setBasicSalary('');
        setAllowance('');
        setSalaryAdvance('');
        setStaffLoan('');
        setNetSalary('');
        setEmployeeEPF('');
        setEmployerEPF('');
        setEmployerETF('');
    }

    const numberWithCommas = (x) => {
        return x.toLocaleString('en-US', {
            style: 'currency',
            currency: 'LKR',
        })
    }

    const addCommas = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const removeNonNumeric = num => num.toString().replace(/[^0-9]/g, "");

    return (
        <div className='flex-grow grid grid-cols-3 my-10'>
            <div className='bg-black col-span-2 p-14 text-white'>
                <div className=' border-b border-slate-600 pb-1'>
                    <h1 className='font-extrabold text-4xl'>Salary Calculator</h1>
                    <p>Calculate EPF and ETF easily be providing details related to your salary.</p>
                </div>


                <div className="pt-16">
                    <div className="grid grid-cols-6 gap-10">
                        <div className="col-span-6 sm:col-span-3">
                            <input onChange={(e) => setBasicSalary(e.target.value)} value={basicSalary} type="text" name="first-name" id="first-name" autoComplete="given-name" placeholder='basic salary'
                                className="block p-3 w-full bg-zinc-900 border-0 focus:ring-0 border-b-2 text-zinc-300 text-lg font-bold" />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <input onChange={(e) => setAllowance(e.target.value)} value={allowances} type="text" name="first-name" id="first-name" autoComplete="given-name" placeholder='allowances'
                                className="block p-3 w-full bg-zinc-900 border-0 focus:ring-0 border-b-2 text-zinc-300 text-lg font-bold" />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <input onChange={(e) => setSalaryAdvance(e.target.value)} value={salaryAdvance} type="text" name="first-name" id="first-name" autoComplete="given-name" placeholder='salary advance'
                                className="block p-3 w-full bg-zinc-900 border-0 focus:ring-0 border-b-2 text-zinc-300 text-lg font-bold" />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <input onChange={(e) => setStaffLoan(e.target.value)} value={staffLoan} type="text" name="first-name" id="first-name" autoComplete="given-name" placeholder='staff loan'
                                className="block p-3 w-full bg-zinc-900 border-0 focus:ring-0 border-b-2 text-zinc-300 text-lg font-bold" />
                        </div>
                        <div className="col-span-3">
                            <button onClick={reset} className='bg-sky-400 block w-full py-3 rounded-none'>Reset</button>
                        </div>
                        <div className="col-span-3">
                            <button onClick={calculate} className='bg-sky-400 block w-full py-3 rounded-none'>Calculate</button>
                        </div>
                    </div>
                </div>

            </div >
            <div className='bg-slate-100 p-14'>

                {isLoading ?
                    <div className='flex h-full items-center justify-center'>
                        <Spinner />
                    </div>

                    :
                    <>
                        <div className='border-b border-slate-300 py-4'>
                            <p className='text-zinc-900 font-bold text-lg text-center underline decoration-zinc-400 decoration-2'>Net Salary</p>
                            <p className='text-zinc-900 font-extrabold text-2xl text-center mt-2'>{numberWithCommas(netSalary)}</p>
                        </div>
                        <div className='border-b border-slate-300 py-4'>
                            <p className='text-zinc-900 font-bold text-lg text-center underline decoration-zinc-400 decoration-2'>Employee Contribution</p>
                            <div className='flex items-center justify-between mt-4'>
                                <p className='text-zinc-900 font-extrabold text-lg text-center mt-2'>EPF (8%)</p>
                                <p className='text-zinc-900 font-extrabold text-lg text-center mt-2'>{numberWithCommas(employeeEPF)}</p>
                            </div>
                        </div>
                        <div className='border-b border-slate-300 py-4'>
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
                    </>
                }
            </div>

            <div className='bg-gray-50 h-full my-5 col-span-3'></div>
        </div >
    )
}

export default Calculator
