import React from 'react'
import { ArrowNarrowRightIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

const TypeCard = ({ Icon, title, link }) => {
    return (
        <Link to={link}>
            <div className='group bg-white opacity-90 h-48 w-48 flex flex-col items-center justify-around p-4 hover:opacity-100  hover:transition ease-in-out hover:shadow-xl  hover:shadow-slate-300/50 hover:rounded-xl hover:scale-105'>
                <div className='w-10 h-10 flex items-center justify-center rounded-2xl bg-indigo-50'>
                    <Icon className="w-4 h-4 text-indigo-400" />
                </div>
                <div className='text-center'>
                    <h1 className='text-md font-bold text-slate-700'>{title}</h1>
                    <p className='text-xs text-indigo-300 hidden group-hover:inline-flex'>Calculator</p>
                </div>
                <ArrowNarrowRightIcon className='w-3 h-3 text-indigo-400' />
            </div>
        </Link>
    )
}

export default TypeCard
