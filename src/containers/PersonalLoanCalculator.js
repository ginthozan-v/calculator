import React, { useState } from 'react';
import Calculator from '../components/Calculator';
import CurrencyInputField from '../components/CurrencyInputField';
import numberWithCommas from '../components/NumberWithCommas';
import SelectInput from '../components/SelectInput';
import Spinner from '../components/Spinner';
import Vector from '../assets/image/Calculator-bro.svg'

const Borrower = [
    { id: 1, name: 'Custom' },
    { id: 2, name: 'COM' },
    { id: 3, name: 'NDB' },
    { id: 4, name: 'NSB' }
]

const PersonalLoanCalculator = () => {
    const [loaded, setLoaded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loanAmount, setLoanAmount] = useState()
    const [selectedBorrower, setSelectedBorrower] = useState(Borrower[0]);
    const [interestRate, setInterestRate] = useState();
    const [selectedYear, setSelectedYear] = useState({ id: 0, name: 'Years' });

    const [monthlyInstallment, setMonthlyInstallment] = useState(0);
    const [capitalPayment, setCapitalPayment] = useState(0);
    const [interestPayment, setInterestPayment] = useState(0);

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

    const calculate = () => {
        setLoading(true)
        setLoaded(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);

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
    }

    const reset = () => {
        setMonthlyInstallment(0);
        setInterestPayment(0);
        setCapitalPayment(0);
        setSelectedBorrower(Borrower[0])
        setInterestRate();
        setSelectedYear({ id: 0, name: 'Years' });
        setLoanAmount(0)
    }

    const more = () => { }

    const renderCalculator = () => {
        let content = "";
        content = (
            <div className="pt-16">
                <div className="grid grid-cols-6 gap-5 sm:gap-10">
                    <div className="col-span-6 sm:col-span-3">
                        <CurrencyInputField setValue={setLoanAmount} value={loanAmount} name="loan amount" />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <SelectInput option={Year} selectedValue={selectedYear} onChangeSelect={onChangeYear} />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <SelectInput option={Borrower} selectedValue={selectedBorrower} onChangeSelect={onChangeBorrower} />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <CurrencyInputField setValue={setInterestRate} value={interestRate} name="interest rate %" disabled={selectedBorrower.name !== 'Custom' && true} />
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
            <Calculator loaded={loaded} renderCalculator={renderCalculator} title='Personal Loan Calculator' description='Easily calculate your personal loan repayments by providing the necessary information. We will calculate the monthly repayments behalf of you.' />

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
                            {/* <div className="col-span-6 my-4">
                                <button onClick={more} className='bg-sky-400 block w-full py-3 rounded-none'>More</button>
                            </div> */}
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
    );
};

export default PersonalLoanCalculator;
