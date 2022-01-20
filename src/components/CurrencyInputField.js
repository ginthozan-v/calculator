import React from 'react'
import CurrencyInput from 'react-currency-input-field';

const CurrencyInputField = ({ setValue, value, name, disabled }) => {

    return (
        <CurrencyInput
            id={name}
            name={name}
            placeholder={name}
            value={value}
            decimalsLimit={2}
            onValueChange={(value) => setValue(value)}
            className="block p-3 w-full bg-zinc-900 border-0 focus:ring-0 border-b-2 text-zinc-300 sm:text-sm rounded-md"
            disabled={disabled}
        />
    )
}

export default CurrencyInputField
