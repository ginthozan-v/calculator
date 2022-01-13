import React, { useEffect, useState } from 'react'
import adImage from '../assets/image/young-asia-girl.jpg';
import { HOME_LOAN_CALCULATOR, SALARY_CALCULATOR } from '../config/endpoints';
import SalaryCalculator from './SalaryCalculator';
import HomeLoanCalculator from './HomeLoanCalculator';

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
            default:
                break;
        }
        return content;
    };

    return (
        <div className='lg:grid grid-flow-row-dense lg:grid-cols-4 xl:grid-cols-3 grid-rows-3 my-10'>

            {renderCalculator()}

            <div className='relative  h-60 row-span-1 bg-gray-50 mt-5  col-span-4 xl:col-span-3'>
                <img src={adImage} alt="advertisement" className='h-full w-full object-cover' />
                <a className='text-xs text-yellow-200 absolute bottom-2 left-2' href='https://www.freepik.com/photos/woman' target="_blank">Woman photo created by tirachardz - www.freepik.com</a>
            </div>
        </div>
    )
}

export default Calculator
