import React from 'react'
import { ArrowNarrowRightIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

const TypeCard = ({ Icon, title, link }) => {
    return (
        <Link to={link}>
            <div className='group bg-white opacity-90 w-28 h-28 sm:w-40 sm:h-40 md:w-24 md:h-24 lg:h-48 lg:w-48 flex flex-col items-center justify-around p-2 sm:p-4 hover:opacity-100  hover:transition ease-in-out hover:shadow-xl  hover:shadow-slate-300/50 hover:rounded-xl hover:scale-105'>
                <div className='w-5 h-5 sm:w-10 sm:h-10 flex items-center justify-center rounded-2xl bg-indigo-50'>
                    <Icon className="w-2 h-2 sm:w-4 sm:h-4 text-indigo-400" />
                </div>
                <div className='text-center'>
                    <h1 className='text-xs sm:text-md font-bold text-slate-700'>{title}</h1>
                    <p className='text-xs text-indigo-300 hidden group-hover:inline-flex'>Calculator</p>
                </div>
                <ArrowNarrowRightIcon className='w-3 h-3 text-indigo-400' />
            </div>
        </Link>
    )
}

export default TypeCard
