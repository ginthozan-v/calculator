import React from 'react'
import HomeImage from '../assets/image/kelly-sikkema-xoU52jUVUXA-unsplash.jpg'
import TypeCard from '../components/TypeCard'
import { HomeIcon, CashIcon, BeakerIcon } from '@heroicons/react/solid'

const types = [
    {
        id: 1,
        title: 'Salary',
        icon: CashIcon,
        link: '/salary-calculator'

    },
    {
        id: 2,
        title: 'Home Loans',
        icon: HomeIcon,
        link: "#"
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
        <div className='flex-grow grid grid-cols-2 '>

            <div className='relative flex flex-col justify-center h-full py-10 px-20'>

                <div className='absolute bottom-24 left-32 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob'></div>
                <div className='absolute bottom-24 right-32 w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-2000'></div>
                <div className='absolute bottom-60 left-48 w-72 h-72 bg-violet-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-4000'></div>

                <h1 className='text-6xl font-extrabold text-slate-700'>
                    Compare loans from multiple providers in one place
                </h1>
                <div className='relative flex flex-wrap mt-14'>
                    {types.map(type => {
                        return (
                            <TypeCard key={type.id} title={type.title} Icon={type.icon} link={type.link} />
                        )
                    })}

                </div>
            </div>
            <div className='h-full py-10 px-20'>
                <img src={HomeImage} className='w-full h-full object-cover' alt='banner' />
            </div>
        </div>
    )
}

export default Home
