import React from 'react';

export default function Button({ text, onClick, bgColor }) {
  return (
    <button
      className={
        bgColor
          ? 'w-full p-3 my-2 rounded-lg bg-stone-300 hover:bg-stone-400 text-white'
          : 'px-4 py-2'
      }
      onClick={onClick}
    >
      {text}
    </button>
  );
}
