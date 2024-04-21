import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { login, logout, onUserStateChange } from '../firebase';
import User from './User';

export default function Header() {
  const [userAuth, setUserAuth] = useState(null);

  useEffect(() => {
    onUserStateChange(setUserAuth);
  }, []);

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
      {/* <Link to='/products/new' className='px-4 py-2'>
        New
      </Link> */}
      <section className='flex items-center gap-1'>
        {userAuth && <User user={userAuth} />}
        {userAuth ? (
          <button className='px-4 py-2' onClick={logout}>
            Logout
          </button>
        ) : (
          <button className='px-4 py-2' onClick={login}>
            Login
          </button>
        )}
      </section>
    </header>
  );
}
