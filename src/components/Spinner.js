import React from 'react'
import Loader from "react-loader-spinner";
const Spinner = () => {
    return (
        <Loader
            type="MutatingDots"
            color="#00BFFF"
            secondaryColor='#c7c7c7'
            height={100}
            width={100}
            timeout={3000}
        />
    )
}

export default Spinner
