import React from 'react';

const Calculator = ({ loaded, renderCalculator, title, description }) => {
    return (
        <div className='calculator'>
            <div className={`min-h-96 ${ loaded ? 'hidden lg:block' : 'block' }`}>
                <div className='border-b border-slate-600 pb-1'>
                    <h1 className='font-extrabold text-4xl'>{title}</h1>
                    <p>{description}</p>
                </div>

                {renderCalculator && renderCalculator()}
            </div>
        </div >
    );
};

export default Calculator;
