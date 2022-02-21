import React from 'react'
import FeedbackCard from './FeedbackCard'

const FeedbackSlider = ({ feedbacks }) => {

    return (
        <div className='absolute left-2 lg:left-4 z-10 -bottom-24 lg:bottom-12 flex gap-4 w-full lg:max-w-[45vw] overflow-x-auto scroll-smooth scroll-pl-12 pr-10 snap-x'>
            {feedbacks.map(feedback => (
                <div className='snap-center lg:snap-start'>
                    <FeedbackCard key={feedback.id} feedback={feedback} />
                </div>
            ))}
        </div>
    )
}

export default FeedbackSlider