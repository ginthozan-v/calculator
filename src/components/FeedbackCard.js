import React from 'react'
import Avatar from './Avatar'

const FeedbackCard = ({ feedback }) => {
    return (
        <div className=' flex-shrink-0 bg-white py-2 px-8 rounded-lg flex gap-6 items-center w-80 lg:w-96 h-32 shadow-md '>
            <div className='w-14 h-14 shrink-0 bg-slate-400 rounded-full'>
                <Avatar imageUrl={feedback.data.userImage} />
            </div>
            <div>
                <h1 className='text-md font-bold text-gray-600 leading-tight tracking-wide'>{feedback.data.title}</h1>
                <p className='leading-tight text-sm mt-1 text-gray-400 tracking-wide  w-48 lg:w-56 overflow-hidden text-ellipsis'>
                    {feedback.data.feedback}</p>
                <p className='leading-tight text-xs mt-2 font-bold tracking-wide text-orange-600'>{feedback.data.userName}</p>
            </div>
        </div>
    )
}

export default FeedbackCard