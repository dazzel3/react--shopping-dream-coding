import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useAuthContext } from '../context/AuthContext';
import { getCart, removeCart, setCart } from '../api/firebase';

export default function useCart() {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();

  const cartQuery = useQuery({
    queryKey: ['carts', uid || ''],
    queryFn: () => getCart(uid),
    enabled: !!uid,
  });
  const setItem = useMutation({
    mutationFn: (product) => setCart(uid, product),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['carts', uid] }),
  });
  const removeItem = useMutation({
    mutationFn: (id) => removeCart(uid, id),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['carts', uid] }),
  });

  return { cartQuery, setItem, removeItem };
}
