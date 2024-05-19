import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children, requireAdmin }) {
  const { userAuth } = useAuthContext();

  if (!userAuth || (requireAdmin && !userAuth.isAdmin)) {
    return <Navigate to='/' replace />;
  }
  return children;
}
