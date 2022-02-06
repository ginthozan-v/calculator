import React, { useState } from 'react'
import Spinner from '../components/Spinner'
import Vector from '../assets/image/Calculator-bro.svg'
import CurrencyInputField from '../components/CurrencyInputField';
import SelectInput from '../components/SelectInput';
import numberWithCommas from '../components/NumberWithCommas';
import Calculator from '../components/Calculator';
import Modal from '../components/Modal';

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
    const [loaded, setLoaded] = useState(false);

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
        setLoading(true)
        setLoaded(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
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
            case 'equated-balance':
                let interest_rate = interestRate / 1200;
                let term = selectedYear.value;
                let top = Math.pow((1 + interest_rate), term);
                let bottom = top - 1;
                let ratio = top / bottom;
                let EMI = loanAmount * interest_rate * ratio; // Monthly Repayment
                let Total = EMI * term // Total Repayment

                setMonthlyInstallment(EMI);
                setInterestPayment(loanAmount * interest_rate);
                setCapitalPayment(EMI - interestPayment);
                break;
            default:
                break;
        }

    }

    const more = () => {
        setModal(true)
    }

    const reset = () => {
        setFullResult([]);
        setCapitalPayment(0);
        setInterestPayment(0);
        setMonthlyInstallment(0);
        setSelectedYear({ id: 0, name: 'Years' });
        setSelectedPaymentMethod({ id: 0, name: 'Select Payment Method' });
        setSelectedBorrower(Borrower[0]);
        setLoanAmount();
        setInterestRate();
    }

    const renderCalculator = () => {
        let content = "";
        content = (
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
        )
        return content;
    };

    const renderModalBody = () => {
        let content = "";
        content = (
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
        )
        return content;
    };

    return (
        <>
            <Calculator loaded={loaded} renderCalculator={renderCalculator} title='Home Loan Calculator' description='By providing basic information about the housing loan you are interested, we help you estimate your home loan repayments.' />

            <div className='result'>
                {loading ?
                    <Spinner loading={loading} />

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
                            {selectedPaymentMethod.type === 'reducing-balance' && <div className="col-span-6 my-4 ">
                                <button onClick={more} className='bg-sky-400 block w-full py-3 rounded-none'>More</button>
                            </div>}

                        </div> :
                        <div className='h-12 sm:h-auto'>
                            <object type="image/svg+xml" data={Vector} className='hidden lg:block'>svg-animation</object>
                        </div>
                }
            </div>

            <Modal isModalOpen={modal} setModalClose={setModal} title="Home Loan Calculator" body={renderModalBody} />
        </>
    )
}

export default HomeLoanCalculator
