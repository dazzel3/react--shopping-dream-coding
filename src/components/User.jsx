import React from 'react';

export default function User({ user: { photoURL, displayName } }) {
  return (
    <div className='flex items-center shrink-0 gap-2'>
      <img src={photoURL} alt={displayName} className='w-7 rounded-full' />
      <p className='hidden md:block'>{displayName}</p>
    </div>
  );
}
