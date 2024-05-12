import React from 'react';

export default function Button({ text, onClick, bgColor }) {
  return (
    <button
      className={
        bgColor ? 'p-4 my-2 rounded-lg bg-stone-400 text-white' : 'px-4 py-2'
      }
      onClick={onClick}
    >
      {text}
    </button>
  );
}
