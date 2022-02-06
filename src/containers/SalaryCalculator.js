import React, { useState } from 'react'
import Spinner from '../components/Spinner'
import CurrencyInputField from '../components/CurrencyInputField';
import Vector from '../assets/image/Calculator-bro.svg'
import numberWithCommas from '../components/NumberWithCommas';
import Calculator from '../components/Calculator';

const SalaryCalculator = () => {
    const [basicSalary, setBasicSalary] = useState('');
    const [allowances, setAllowance] = useState('');
    const [salaryAdvance, setSalaryAdvance] = useState('');
    const [staffLoan, setStaffLoan] = useState('');
    const [netSalary, setNetSalary] = useState('');
    const [employeeEPF, setEmployeeEPF] = useState('');
    const [employerEPF, setEmployerEPF] = useState('');
    const [employerETF, setEmployerETF] = useState('');
    const [loading, setLoading] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const calculate = () => {
        setLoading(true)
        setLoaded(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
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
        setLoaded(false)
        setBasicSalary('');
        setAllowance('');
        setSalaryAdvance('');
        setStaffLoan('');
        setNetSalary('');
        setEmployeeEPF('');
        setEmployerEPF('');
        setEmployerETF('');
    }

    const renderCalculator = () => {
        let content = "";
        content = (
            <div className="pt-16">
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
            </div>
        )
        return content;
    };

    return (
        <>
            <Calculator loaded={loaded} renderCalculator={renderCalculator} title='Salary Calculator' description='Calculate EPF and ETF easily be providing details related to your salary.' />

            <div className='result'>
                {loading ?
                    <Spinner loading={loading} />

                    : loaded ?
                        <div className='lg:h-96'>
                            <div className='border-b border-slate-300 my-4'>
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
                            </div>
                        </div> :
                        <div className='h-12 sm:h-auto'>
                            <object type="image/svg+xml" data={Vector} className='hidden lg:block'>svg-animation</object>
                        </div>
                }
            </div>
        </>
    )
}

export default SalaryCalculator
