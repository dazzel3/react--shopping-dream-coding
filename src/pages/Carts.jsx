import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import { useQuery } from '@tanstack/react-query';
import { getCart } from '../api/firebase';
import { Link } from 'react-router-dom';
import CartItem from '../components/\bCartItem';
import PriceCard from '../components/PriceCard';
import Button from '../components/ui/Button';

const SHIPPING_PRICE = 3000;

export default function Carts() {
  const { uid } = useAuthContext();
  const { isLoading, data: products } = useQuery({
    queryKey: ['carts'],
    queryFn: () => getCart(uid),
  });

  if (isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0;
  const totalPrice =
    products &&
    products.reduce(
      (prev, current) => prev + parseInt(current.price) * current.quantity,
      0
    );
  return (
    <section className='p-8 flex flex-col'>
      <h2 className='text-2xl font-bold text-center my-2'>Carts</h2>
      {!hasProducts && (
        <p>
          Your cart is currently empty.
          <br />
          Continue browsing{' '}
          <Link to='/'>
            <span className='underline'>here</span>
          </Link>
          .
        </p>
      )}
      {hasProducts && (
        <div className='relatvie p-4 px-8'>
          <ul className='border-b border-stone-200 mb-5'>
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} uid={uid} />
              ))}
          </ul>
          <div className='mb-5 w-3/5 absolute right-16'>
            <PriceCard text='PRODUCT' price={totalPrice} />
            <PriceCard text='SHIPPING' price={SHIPPING_PRICE} />
            <hr className='mt-2 mb-3' />
            <PriceCard text='SUBTOTAL' price={totalPrice + SHIPPING_PRICE} />
            <Button text='주문하기' bgColor />
          </div>
        </div>
      )}
    </section>
  );
}
