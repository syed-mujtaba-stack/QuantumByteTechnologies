'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { getCurrentUser, loginUser, logoutUser, registerUser, type PublicUser } from '@/app/auth/actions';

interface AuthContextType {
  user: PublicUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  register: (data: { name: string; email: string; phone: string; password: string }) => Promise<{ ok: boolean; error?: string }>;
  logout: () => Promise<void>;
  setUser: (user: PublicUser | null) => void;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<PublicUser | null>(null);
  const [loading, setLoading] = useState(true);

  const refreshUser = useCallback(async () => {
    try {
      const res = await getCurrentUser();
      setUser(res.user);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshUser();
  }, [refreshUser]);

  const login = useCallback(async (email: string, password: string) => {
    const res = await loginUser({ email, password });
    if (res.ok && res.user) {
      setUser(res.user);
    }
    return res;
  }, []);

  const register = useCallback(async (data: { name: string; email: string; phone: string; password: string }) => {
    const res = await registerUser(data);
    if (res.ok && res.user) {
      setUser(res.user);
    }
    return res;
  }, []);

  const logout = useCallback(async () => {
    await logoutUser();
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, setUser, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return ctx;
}