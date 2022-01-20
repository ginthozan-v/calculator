import React, { useMemo, useState, Fragment } from 'react'
import { DotLoader } from 'react-spinners'
import Vector from '../assets/image/Calculator-bro.svg'
import { css } from "@emotion/react";
import CurrencyInputField from '../components/CurrencyInputField';
import SelectInput from '../components/SelectInput';
import numberWithCommas from '../components/NumberWithCommas';
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/solid';

const override = css`
  display: block;
  margin: 0 auto;
`;

const PaymentMethod = [
    { id: 1, name: 'Equated Balance', type: 'equated-balance' },
    { id: 2, name: 'Reducing Balance', type: 'reducing-balance' }
]

const Borrower = [
    { id: 1, name: 'Custom' },
    { id: 2, name: 'COM' },
    { id: 3, name: 'NDB' },
    { id: 4, name: 'NSB' }
]

const columns = [
    {
        title: "Months",
        field: "name",
    },
    {
        title: "Monthly Installment Principal Amount",
        field: "email",
    },
    {
        title: "Monthly Interest",
        field: "age",
    },
    {
        title: "Monthly Installment",
        field: "gender",
    },
    {
        title: "Principal Amount",
        field: "gender",
    },
];

const HomeLoanCalculator = () => {
    const [loanAmount, setLoanAmount] = useState()
    const [selectedYear, setSelectedYear] = useState({ id: 0, name: 'Years' });
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState({ id: 0, name: 'Select Payment Method' });
    const [selectedBorrower, setSelectedBorrower] = useState(Borrower[0]);
    const [interestRate, setInterestRate] = useState();
    const [fullResult, setFullResult] = useState([]);
    const [modal, setModal] = useState(false);

    const [monthlyInstallment, setMonthlyInstallment] = useState(0);
    const [capitalPayment, setCapitalPayment] = useState(0);
    const [interestPayment, setInterestPayment] = useState(0);

    const [loading, setLoading] = useState(false);
    const [loaded, setLoaded] = useState(true);
    const [color, setColor] = useState("#cfcfcf");

    let Year = [];
    Array.from(Array(20)).forEach((x, i) => (
        Year.push({ id: ++i, name: i, value: i * 12 })
    ));

    const onChangeBorrower = (val) => {
        setSelectedBorrower(val)
        switch (val.name) {
            case 'COM':
                setInterestRate(15);
                break;
            case 'NDB':
                setInterestRate(13.5);
                break;
            case 'NSB':
                setInterestRate(14);
                break;
            default:
                break;
        }
    }

    const onChangeYear = (val) => {
        setSelectedYear(val)
    }

    const onChangePaymentMethod = (val) => {
        setSelectedPaymentMethod(val)
    }

    const calculate = () => {
        let loan_amount = loanAmount;
        switch (selectedPaymentMethod.type) {
            case "reducing-balance":
                let capital_payment = loan_amount / selectedYear.value;
                let interest = (interestRate / 100 * loan_amount) / selectedYear.value;
                let installment = capital_payment + interest;
                setCapitalPayment(capital_payment)
                setInterestPayment(interest)
                setMonthlyInstallment(installment)

                let principal_amount = loan_amount - capital_payment;
                let monthly_interest = interest;
                let monthly_installment = capital_payment + monthly_interest;

                let full_result = []

                for (let i = 0; i < selectedYear.value; i++) {
                    full_result.push({
                        Month: i + 1, Monthly_Installment_Principal_Amount: capital_payment.toFixed(2), Monthly_Interest: monthly_interest.toFixed(2),
                        Monthly_Installment: monthly_installment.toFixed(2), Principal_Amount: Math.max(0, principal_amount.toFixed(2))
                    });
                    monthly_interest = (interestRate / 100 * principal_amount) / selectedYear.value;
                    principal_amount = principal_amount - capital_payment;
                    monthly_installment = capital_payment + monthly_interest;

                }
                setFullResult(full_result)
                break
        }

    }

    const more = () => {
        setModal(true)
    }

    const reset = () => { }


    return (
        <>
            <div className='bg-black sm:col-span-2 row-span-2 p-8 sm:p-14 lg:p-8 xl:p-14 text-white'>
                <div className={`min-h-96 ${ loaded ? 'hidden lg:block' : 'block' }`}>
                    <div className='border-b border-slate-600 pb-1'>
                        <h1 className='font-extrabold text-4xl'>Home Loan Calculator</h1>
                        <p>By providing basic information about the housing loan you are interested, we help you estimate your home loan repayments. </p>
                    </div>

                    <div className="pt-16">
                        <div className="grid grid-cols-6 gap-5 sm:gap-10">
                            <div className="col-span-6 sm:col-span-6">
                                <CurrencyInputField name="loan amount" setValue={setLoanAmount} value={loanAmount} />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <SelectInput option={Borrower} selectedValue={selectedBorrower} onChangeSelect={onChangeBorrower} />
                            </div>


                            <div className="col-span-6 sm:col-span-3">
                                <CurrencyInputField setValue={setInterestRate} value={interestRate} name="interest rate %" disabled={selectedBorrower.name !== 'Custom' && true} />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <SelectInput option={Year} selectedValue={selectedYear} onChangeSelect={onChangeYear} />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <SelectInput option={PaymentMethod} selectedValue={selectedPaymentMethod} onChangeSelect={onChangePaymentMethod} />
                            </div>
                            <div className="col-span-6">
                                <button onClick={calculate} className='bg-sky-400 block w-full py-3 rounded-none'>Calculate</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className=' bg-slate-100 lg:col-span-2 xl:col-span-1 px-14 flex flex-col justify-center row-span-2'>
                {loading ?
                    <div className='flex h-96 lg:h-full items-center justify-center '>
                        <DotLoader color={color} loading={loading} css={override} size={60} margin={2} />
                    </div>

                    : loaded ?
                        <div className='lg:h-96'>
                            <div className='border-b border-slate-300 my-4'>
                                <p className='text-zinc-900 font-bold text-lg text-center underline decoration-zinc-400 decoration-2'>Estimated Monthly Installment</p>
                                <p className='text-zinc-900 font-extrabold text-2xl text-center mt-2'>{numberWithCommas(monthlyInstallment)}</p>
                            </div>
                            <div className='border-b border-slate-300 my-4'>
                                <p className='text-zinc-900 font-bold text-lg text-center underline decoration-zinc-400 decoration-2'>Capital payment (1st month)</p>
                                <div className='flex items-center justify-center mt-4'>
                                    <p className='text-zinc-900 font-extrabold text-lg text-center mt-2'>{numberWithCommas(capitalPayment)}</p>
                                </div>
                            </div>
                            <div className='border-b border-slate-300 my-4'>
                                <p className='text-zinc-900 font-bold text-lg text-center underline decoration-zinc-400 decoration-2'>Interest payment (1st month)</p>
                                <div className='flex items-center justify-center mt-4'>
                                    <p className='text-zinc-900 font-extrabold text-lg text-center mt-2'>{numberWithCommas(interestPayment)}</p>
                                </div>

                            </div>
                            <div className="col-span-6 my-4 ">
                                <button onClick={reset} className='bg-sky-400 block w-full py-3 rounded-none'>Reset</button>
                            </div>
                            <div className="col-span-6 my-4 ">
                                <button onClick={more} className='bg-sky-400 block w-full py-3 rounded-none'>More</button>
                            </div>
                        </div> :
                        <div className='h-12 sm:h-auto'>
                            <object type="image/svg+xml" data={Vector} className='hidden lg:block'>svg-animation</object>
                        </div>
                }
            </div>

            <Transition.Root show={modal} as={Fragment}>
                <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={() => setModal(false)}>
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                            &#8203;
                        </span>

                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 
                            sm:align-middle sm:max-w-4xl sm:w-full">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ">
                                    <div className="sm:flex sm:items-start">

                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <Dialog.Title as="h3" className="text-lg leading-6 font-bold text-gray-600">
                                                Home Loan Calculator
                                            </Dialog.Title>
                                            <div className="mt-2 overflow-x-hidden">

                                                <div className="flex flex-col">
                                                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                                        <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                                                            <div className="h-96 overflow-y-auto">
                                                                <table className="min-w-full">
                                                                    <thead className="bg-gray-50 dark:bg-gray-700">
                                                                        <tr>
                                                                            {columns.map((col, i) => (
                                                                                <th key={i} scope="col" className="py-3 px-6 text-xs font-bold tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                                                                                    {col.title}
                                                                                </th>
                                                                            ))}

                                                                        </tr>
                                                                    </thead>
                                                                    <tbody >
                                                                        {fullResult.map((res, i) => (
                                                                            <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                                                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                    {res.Month}
                                                                                </td>
                                                                                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400 ">
                                                                                    {res.Monthly_Installment_Principal_Amount}
                                                                                </td>
                                                                                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                                    {res.Monthly_Interest}
                                                                                </td>
                                                                                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                                    {res.Monthly_Installment}
                                                                                </td>
                                                                                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                                    {res.Principal_Amount}
                                                                                </td>
                                                                            </tr>
                                                                        ))}
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <button
                                        type="button"
                                        className="mt-3 w-full inline-flex justify-center rounded-md border-0 shadow-sm px-4 py-2 bg-indigo-200 text-base font-medium text-gray-800 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={() => setModal(false)}
                                    >
                                        OK
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}

export default HomeLoanCalculator
