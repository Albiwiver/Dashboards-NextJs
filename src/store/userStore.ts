import { create } from "zustand";

export interface User {
  id?: string;
  name: string;
  email: string;
  lastName: string;
  token?: string;
  image?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,

  setUser: (user) =>
    set(() => ({
      user,
      isAuthenticated: true,
    })),

  logout: () =>
    set(() => ({
      user: null,
      isAuthenticated: false,
    })),
}));
