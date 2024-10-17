"use client"
import React from 'react';
import CheckoutPage from './CheckoutPage';
import ConvertToSubCurrency from './ConvertToSubCurrency';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

if(process.env.NEXT_PUBLIC_STRIPE__PUBLIC_KEY===undefined){
    throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined")
}

const stripePromise=loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)

const Payment = () => {
    const amount=49.99;
    return (
        <div>
            
        </div>
    );
};

export default Payment;