import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='w-full p-4 px-8 flex justify-between items-center border-b border-gray-800'>
      <Link to='/products'>
        <button className='text-base rounded-md px-4 py-2'>Products</button>
      </Link>
      <Link to='/'>
        <img className='w-32 h-full' src='/images/logo.png' alt='core logo' />
      </Link>
      <Link to='/carts'>
        <button className='text-base rounded-md px-4 py-2'>Carts</button>
      </Link>
      <Link to='/products/new'>
        <button className='text-base rounded-md px-4 py-2'>New</button>
      </Link>
      <button className='text-base rounded-md px-4 py-2'>Login</button>
    </header>
  );
}
