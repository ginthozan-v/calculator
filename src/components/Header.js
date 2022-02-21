import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/image/logo.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center py-5 text-slate-600'>
            <Link to="/" className='flex items-center gap-2 text-3xl font-black font-Mosk underline decoration-indigo-300 decoration-4'>
                <img src={logo} alt="logo" className='w-10 h-10' />
                Calculator</Link>
            {/* <ul className='flex gap-6 text-sm font-bold'>
                <li>Navigation 1</li>
                <li>Navigation 2</li>
                <li>Navigation 3</li>
                <li>Navigation 4</li>
            </ul> */}
            <Link to="feedback"
                className='bg-indigo-300 px-8 py-2 rounded-lg text-sm font-bold text-white shadow-lg 
                shadow-indigo-300/50 hover:bg-indigo-400 transition duration-150 ease-in-out'>
                Feedback
            </Link>
        </div>
    )
}

export default Header
