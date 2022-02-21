import React from 'react'

const Avatar = ({ imageUrl }) => {
    return (
        <img src={imageUrl} alt="" className='rounded-full object-cover' />
    )
}

export default Avatar