import React from 'react'
import adImage from '../assets/image/young-asia-girl.jpg';
import { HOME_LOAN_CALCULATOR, LEASING_CALCULATOR, PERSONAL_LOAN_CALCULATOR, SALARY_CALCULATOR } from '../config/endpoints';
import SalaryCalculator from './SalaryCalculator';
import HomeLoanCalculator from './HomeLoanCalculator';
import PersonalLoanCalculator from './PersonalLoanCalculator';
import LeasingCalculator from './LeasingCalculator';

const Calculator = () => {
    const route = window.location.pathname;

    const renderCalculator = () => {
        let content = "";
        switch (route) {
            case SALARY_CALCULATOR:
                content = (
                    <SalaryCalculator />
                );
                break;
            case HOME_LOAN_CALCULATOR:
                content = (
                    <HomeLoanCalculator />
                );
                break;
            case PERSONAL_LOAN_CALCULATOR:
                content = (
                    <PersonalLoanCalculator />
                );
                break;
            case LEASING_CALCULATOR:
                content = (
                    <LeasingCalculator />
                );
                break;
            default:
                alert()
                break;
        }
        return content;
    };

    return (
        <div className='lg:grid grid-flow-row-dense lg:grid-cols-4 xl:grid-cols-3 grid-rows-3 mt-10 mb-5'>
            {renderCalculator()}
            <div className='relative h-64 row-span-1 bg-gray-50 mt-5 col-span-4 xl:col-span-3'>
                <img src={adImage} alt="advertisement" className='h-full w-full object-cover' />
                <a className='text-xs text-yellow-200 absolute bottom-2 left-2' href='https://www.freepik.com/photos/woman' target="_blank" rel="noreferrer">Woman photo created by tirachardz - www.freepik.com</a>
            </div>
        </div>
    )
}

export default Calculator
