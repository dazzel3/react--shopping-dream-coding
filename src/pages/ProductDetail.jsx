import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';
import { setCart } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';

export default function ProductDetail() {
  const { uid } = useAuthContext();
  const {
    state: {
      product: { id, image, title, description, price, option },
    },
  } = useLocation();
  const [selected, setSelected] = useState(option && option[0]);
  const handleSelect = (e) => setSelected(e.target.value);
  const handleClick = () => {
    const product = { id, image, title, price, option: selected, quantity: 1 };
    setCart(uid, product);
  };

  return (
    <section className='flex flex-col md:flex-row p-4 text-stone-800'>
      <img className='w-80 px-4 basis-7/12' src={image} alt={title} />
      <div className='w-full basis-5/12 flex flex-col p-4'>
        <h2 className='text-2xl font-bold py-2'>{title}</h2>
        <p className='text-xl font-bold py-2 border-b border-stone-400'>
          KRW {price}
        </p>
        <p className='py-4 text-stone-500'>{description}</p>
        <div className='flex items-center'>
          <label className='font-bold' htmlFor='select'>
            사이즈
          </label>
          <select
            id='select'
            className='p-2 m-4 flex-1 border border-stone-200 outline-none'
            onChange={handleSelect}
            value={selected}
          >
            {option &&
              option.map((value, index) => (
                <option className='' key={index}>
                  {value}
                </option>
              ))}
          </select>
        </div>
        <Button text='ADD TO CART' onClick={handleClick} />
      </div>
    </section>
  );
}
