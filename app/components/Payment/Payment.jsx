"use client"
import Image from 'next/image';
import React from 'react';
import logo from '../../asset/chatgtp.png'
import { CheckoutPage } from './CheckoutPage';

const Payment = () => {
  return (
    <div className='flex h-100% justify-center items-center'>
      <Image alt='image' src={logo} width={200} height={200}/>
      <button onClick={() => {
  CheckoutPage({
    lineItems: [
      {
        price: "price_1QAs90KDpt7KOvOWKlFCBBMB", // Correct price ID
        quantity: 1
      }
    ]
  })
}} className='text-white bg-slate-500 rounded-full px-2 py-2 shadow-2xl'>
  Buy Now
</button>
    </div>
  );
};

export default Payment;