import React from 'react'

const Calculator = () => {
    return (
        <div className='flex-grow grid grid-cols-3 my-10'>
            <div className='bg-black col-span-2 p-14 text-white'>
                <div className=' border-b border-slate-600 pb-1'>
                    <h1 className=' font-bold text-2xl'>Salary Calculator</h1>
                    <p>Calculate EPF and ETF easily be providing details related to your salary.</p>
                </div>

                <form action="" className='my-10'>
                    <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="">
                            <div className="grid grid-cols-6 gap-10">
                                <div className="col-span-6 sm:col-span-3">
                                    <label for="first-name" className="block text-lg font-medium text-gray-300">Basic Salary</label>
                                    <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                                        className="mt-1 block p-3 w-full text-gray-900 bg-gray-50 rounded-2xl border border-gray-300 sm:text-md focus:ring-sky-400 focus:border-sky-400 dark:bg-slate-600 dark:border-slate-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-400 dark:focus:border-sky-400" />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label for="first-name" className="block text-lg font-medium text-gray-300">Allowances</label>
                                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" className="mt-1 block p-3 w-full text-gray-900 bg-gray-50 rounded-2xl border border-gray-300 sm:text-md focus:ring-sky-400 focus:border-sky-400 dark:bg-slate-600 dark:border-slate-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-400 dark:focus:border-sky-400" />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label for="first-name" className="block text-lg font-medium text-gray-300">Salary Advance</label>
                                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" className="mt-1 block p-3 w-full text-gray-900 bg-gray-50 rounded-2xl border border-gray-300 sm:text-md focus:ring-sky-400 focus:border-sky-400 dark:bg-slate-600 dark:border-slate-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-400 dark:focus:border-sky-400" />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label for="first-name" className="block text-lg font-medium text-gray-300">Staff Loan</label>
                                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" className="mt-1 block p-3 w-full text-gray-900 bg-gray-50 rounded-2xl border border-gray-300 sm:text-md focus:ring-sky-400 focus:border-sky-400 dark:bg-slate-600 dark:border-slate-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-400 dark:focus:border-sky-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div >
            <div className=' bg-slate-100'></div>

            <div className='bg-gray-50 h-full my-5 col-span-3'></div>
        </div >
    )
}

export default Calculator
