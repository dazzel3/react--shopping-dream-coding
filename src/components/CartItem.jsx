import React from 'react';
import useCart from '../hooks/useCart';

export default function CartItem({
  product,
  product: { id, image, title, option, quantity, price },
}) {
  const { setItem, removeItem } = useCart();
  const handleMinus = () => {
    if (quantity < 2) return;
    setItem.mutate({ ...product, quantity: quantity - 1 });
  };
  const handlePlus = () =>
    setItem.mutate({ ...product, quantity: quantity + 1 });
  const handleDelete = () => removeItem.mutate(id);

  return (
    <li className='flex justify-between my-2 items-center gap-5'>
      <img className='w-20 md:w-24' src={image} alt={title} />
      <div className='flex-1 flex justify-between'>
        <div className='basis-3/5'>
          <p>{title}</p>
          <p>KRW {price}</p>
          <p className='font-bold'>{option}</p>
        </div>
        <div className='flex items-center gap-4'>
          <button onClick={handleMinus}>-</button>
          <p>{quantity}</p>
          <button onClick={handlePlus}>+</button>
          <button onClick={handleDelete}>삭제</button>
        </div>
      </div>
    </li>
  );
}
