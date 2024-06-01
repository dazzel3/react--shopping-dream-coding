import React from 'react';
import useCart from '../hooks/useCart';

export default function CartBadge() {
  const {
    cartQuery: { data: products },
  } = useCart();
  return (
    <div>
      Carts
      {products && <span> ({products.length})</span>}
    </div>
  );
}
