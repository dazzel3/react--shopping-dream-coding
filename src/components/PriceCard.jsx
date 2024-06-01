import React from 'react';

export default function PriceCard({ text, price }) {
  return (
    <div className='flex justify-between gap-60 mb-1'>
      <p>{text}</p>
      <p className='font-bold md:text-lg'>{price}</p>
    </div>
  );
}
