import React from 'react'
import HomeImage from '../assets/image/kelly-sikkema-xoU52jUVUXA-unsplash.jpg'
import TypeCard from '../components/TypeCard'
import { HomeIcon, CashIcon, BeakerIcon } from '@heroicons/react/solid'
import { HOME_LOAN_CALCULATOR, SALARY_CALCULATOR } from '../config/endpoints'


const types = [
    {
        id: 1,
        title: 'Salary',
        icon: CashIcon,
        link: SALARY_CALCULATOR

    },
    {
        id: 2,
        title: 'Home Loans',
        icon: HomeIcon,
        link: HOME_LOAN_CALCULATOR
    },
    {
        id: 3,
        title: 'Business Finance',
        icon: BeakerIcon,
        link: "#"
    },
    {
        id: 4,
        title: 'Quick Loans',
        icon: BeakerIcon,
        link: "#"
    },
    {
        id: 5,
        title: 'Others',
        icon: BeakerIcon,
        link: "#"
    }
]

const Home = () => {
    return (
        <div className='flex-grow grid md:grid-cols-2'>

            <div className='relative flex flex-col justify-center h-full py-10  lg:px-20'>

                <div className='absolute bottom-24 left-26 sm:left-32 w-40 h-40 sm:w-72 sm:h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob'></div>
                <div className='absolute bottom-24 right-26 sm:right-32 w-40 h-40 sm:w-72 sm:h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-2000'></div>
                <div className='absolute bottom-60 left-48 w-40 h-40 sm:w-72 sm:h-72 bg-violet-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-4000'></div>

                <h1 className='text-5xl sm:text-7xl lg:text-8xl font-extrabold text-slate-700 font-Mosk'>
                    A simple calculator.
                </h1>
                <div className='relative flex flex-wrap mt-10 sm:mt-14'>
                    {types.map(type => {
                        return (
                            <TypeCard key={type.id} title={type.title} Icon={type.icon} link={type.link} />
                        )
                    })}
                </div>
            </div>
            <div className='h-48 md:h-full sm:py-4 md:py-10 lg:px-20'>
                <img src={HomeImage} className='w-full h-full object-cover' alt='banner' />
            </div>
        </div>
    )
}

export default Home
