const numberWithCommas = (x) => {
    return x.toLocaleString('en-US', {
        style: 'currency',
        currency: 'LKR',
    })
}

export default numberWithCommas;