import React, { useState } from 'react';
import Calculator from '../components/Calculator';
import CurrencyInputField from '../components/CurrencyInputField';
import numberWithCommas from '../components/NumberWithCommas';
import SelectInput from '../components/SelectInput';
import Spinner from '../components/Spinner';
import Vector from '../assets/image/Calculator-bro.svg';

const Borrower = [
    { id: 1, name: 'Custom' },
    { id: 2, name: 'COM' },
    { id: 3, name: 'NDB' },
    { id: 4, name: 'NSB' }
]

const LeasingCalculator = () => {
    const [loaded, setLoaded] = useState(true);
    const [loading, setLoading] = useState(false);

    const [leaseAmount, setLeaseAmount] = useState();
    const [interestRate, setInterestRate] = useState();
    const [downPayment, setDownPayment] = useState();
    const [selectedBorrower, setSelectedBorrower] = useState(Borrower[0]);
    const [selectedYear, setSelectedYear] = useState({ id: 0, name: 'Years' });

    const [monthlyRental, setMonthlyRental] = useState(0);


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

        let lease_amount = leaseAmount;
        if (downPayment) lease_amount = leaseAmount - downPayment;
        let interest = (interestRate / 100) * lease_amount;
        let totalToPay = +lease_amount + +interest;
        let monthly_installment = totalToPay / selectedYear.value;

        setMonthlyRental(monthly_installment)
    }

    const reset = () => { }

    const renderCalculator = () => {
        let content = "";
        content = (
            <div className="pt-16">
                <div className="grid grid-cols-6 gap-5 sm:gap-10">
                    <div className="col-span-6 sm:col-span-3">
                        <CurrencyInputField setValue={setLeaseAmount} value={leaseAmount} name="lease amount" />
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

                    <div className="col-span-6 sm:col-span-3">
                        <CurrencyInputField setValue={setDownPayment} value={downPayment} name="down payment" />
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
            <Calculator loaded={loaded} renderCalculator={renderCalculator} title='Leasing Calculator' description='Calculate the amount of lease repayment from any financial institution in ease.' />

            <div className='result'>
                {loading ?
                    <Spinner loading={loading} />

                    : loaded ?
                        <div className='lg:h-96'>
                            <div className='border-b border-slate-300 my-4'>
                                <p className='text-zinc-900 font-bold text-lg text-center underline decoration-zinc-400 decoration-2'>Monthly Rental</p>
                                <p className='text-zinc-900 font-extrabold text-2xl text-center mt-2'>{numberWithCommas(monthlyRental)}</p>
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
    );
};

export default LeasingCalculator;
