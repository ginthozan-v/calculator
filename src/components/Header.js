import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='flex justify-between items-center py-5 text-zinc-800'>
            <Link to="/" className='text-2xl font-black'>Calculator</Link>
            <ul className='flex gap-6 text-sm font-bold '>
                <li>Navigation 1</li>
                <li>Navigation 2</li>
                <li>Navigation 3</li>
                <li>Navigation 4</li>
            </ul>
            <button className='bg-indigo-300 px-8 py-2 rounded-lg text-sm font-bold text-white shadow-lg shadow-indigo-300/50'>
                Get Started
            </button>
        </div>
    )
}

export default Header
