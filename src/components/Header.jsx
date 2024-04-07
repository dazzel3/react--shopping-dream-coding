import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

export default function Header() {
  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <header className='w-full p-4 px-8 flex justify-between items-center border-b border-gray-800 text-base'>
      <Link to='/products' className='px-4 py-2'>
        Products
      </Link>
      <Link to='/'>
        <img className='w-32 h-full' src='/images/logo.png' alt='core logo' />
      </Link>
      <Link to='/carts' className='px-4 py-2'>
        Carts
      </Link>
      <Link to='/products/new' className='px-4 py-2'>
        New
      </Link>
      <button className='px-4 py-2' onClick={handleGoogleLogin}>
        Login
      </button>
    </header>
  );
}
