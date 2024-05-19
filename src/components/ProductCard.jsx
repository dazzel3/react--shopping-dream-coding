import React, { useMemo } from 'react';

export default function ProductCard({ product: { image, title, price } }) {
  const filteredPrice = useMemo(() => Number(price).toLocaleString(), [price]);

  return (
    <li className='overflow-hidden cursor-pointer'>
      <img className='w-full' src={image} alt={title} />
      <div className='mt-2 px-2 text-md'>
        <h3 className='text-stone-800 font-semibold'>{title}</h3>
        <p className='text-stone-600'>{`KRW ${filteredPrice}`}</p>
      </div>
    </li>
  );
}
