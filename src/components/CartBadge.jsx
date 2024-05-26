import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getCart } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';

export default function CartBadge() {
  const { uid } = useAuthContext();
  const { data: products } = useQuery({
    queryKey: ['carts'],
    queryFn: () => getCart(uid),
  });
  return (
    <div>
      Carts
      {products && <span> ({products.length})</span>}
    </div>
  );
}
