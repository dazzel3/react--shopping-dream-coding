import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({
  product,
  product: { id, image, title, price },
}) {
  const filteredPrice = useMemo(() => Number(price).toLocaleString(), [price]);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/products/${id}`, { state: { product } });
  };
  return (
    <li
      className='overflow-hidden cursor-pointer transition-all hover:scale-105'
      onClick={handleClick}
    >
      <img className='w-full' src={image} alt={title} />
      <div className='mt-2 px-2 text-md'>
        <h3 className='text-stone-800 font-semibold'>{title}</h3>
        <p className='text-stone-600'>{`KRW ${filteredPrice}`}</p>
      </div>
    </li>
  );
}
