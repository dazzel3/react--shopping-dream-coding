import React from 'react';
import Products from '../components/Products';

export default function Main() {
  return (
    <>
      <img className='w-full mb-4' src='/images/banner.png' alt='core banner' />
      <Products />
    </>
  );
}
