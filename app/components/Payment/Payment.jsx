"use client"
import Image from 'next/image';
import React from 'react';
import logo from '../../asset/chatgtp.png'
import logo2 from '../../asset/gemini.png'
import logo3 from '../../asset/claude.jpg'
import { CheckoutPage } from './CheckoutPage';

const Payment = () => {
  return (
    <div className=''>
    <h1 className='text-center text-white text-3xl font-bold'>Our All Api List</h1>
    <div className='grid grid-cols-3'>
    <div className='flex h-100% justify-center items-center  flex-col gap-3'>
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

    <div className='flex h-100% justify-center items-center flex-col gap-3'>
      <Image alt='image' src={logo2} width={200} height={200}/>
      <button onClick={() => {
  CheckoutPage({
    lineItems: [
      {
        price: "price_1QAsilKDpt7KOvOWgQL0bVQl", // Correct price ID
        quantity: 1
      }
    ]
  })
}} className='text-white bg-slate-500 rounded-full px-2 py-2 shadow-2xl'>
  Buy Now
</button>
    </div>
    <div className='flex h-100% justify-center items-center flex-col gap-3'>
      <Image alt='image' src={logo3} width={200} height={200}/>
      <button onClick={() => {
  CheckoutPage({
    lineItems: [
      {
        price: "price_1QAsjKKDpt7KOvOWvwbo2012", // Correct price ID
        quantity: 1
      }
    ]
  })
}} className='text-white bg-slate-500 rounded-full px-2 py-2 shadow-2xl'>
  Buy Now
</button>
    </div>
    </div>
    </div>

  );
};

export default Payment;