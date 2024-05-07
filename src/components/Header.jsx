import React from 'react';
import { Link } from 'react-router-dom';
import User from './User';
import Button from './ui/Button';
import { useAuthContext } from './context/AuthContext';

export default function Header() {
  const { userAuth, login, logout } = useAuthContext();
  return (
    <header className='w-full p-4 px-8 flex justify-between items-center border-b border-gray-800 text-base'>
      <Link to='/products' className='px-4 py-2'>
        Products
      </Link>
      <Link to='/'>
        <img className='w-32 h-full' src='/images/logo.png' alt='core logo' />
      </Link>
      {userAuth && (
        <Link to='/carts' className='px-4 py-2'>
          Carts
        </Link>
      )}
      {userAuth && userAuth.isAdmin && (
        <Link to='/products/new' className='px-4 py-2'>
          New
        </Link>
      )}
      <section className='flex items-center gap-1'>
        {userAuth && <User user={userAuth} />}
        {userAuth ? (
          <Button text={'logout'} onClick={logout} />
        ) : (
          <Button text={'login'} onClick={login} />
        )}
      </section>
    </header>
  );
}
