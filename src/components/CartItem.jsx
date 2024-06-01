import React from 'react';
import { removeCart, setCart } from '../api/firebase';

export default function CartItem({
  product,
  product: { id, image, title, option, quantity, price },
  uid,
}) {
  const handleMinus = () => {
    if (quantity < 2) return;
    setCart(uid, { ...product, quantity: quantity - 1 });
  };
  const handlePlus = () => setCart(uid, { ...product, quantity: quantity + 1 });
  const handleDelete = () => removeCart(uid, id);

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
