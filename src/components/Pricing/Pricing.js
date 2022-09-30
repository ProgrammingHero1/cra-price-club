import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOptions = [
        { id: 1, name: 'Free', price: 0, features: [
            'Awesome Feature',
            'Extra Feature',
            'Unnecessary Feature',
            'Will never use Feature',
            'Hudai feature',
            'Ajaira Feature'
        ] 
    },
        { id: 2, name: 'Medium', price: 9.99, features: [
            'Everything on Free',
            'Extra Feature',
            'Unnecessary Feature',
            'Will never use Feature',
            'Hudai feature',
            'Ajaira Feature'
        ]  },
        { id: 3, name: 'Premium', price: 19.99, features: [
            'Everything on Premium',
            'Extra Feature',
            'Unnecessary Feature',
            'Will never use Feature',
            'Hudai feature',
            'Ajaira Feature'
        ]  },
    ]
    return (
        <div>
            <h2 className='text-5xl font-bold bg-indigo-300 p-12 text-white'>Best Deal of the Town</h2>
            <div className='grid md:grid-cols-3 gap-3 mt-4'>
                {
                    pricingOptions.map(option => <PriceOption
                        key={option.id}
                        option={option}
                    >
                    </PriceOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;