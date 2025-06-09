import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface User {
  id?: string;
  name: string;
  email: string;
  lastName: string;
  token?: string;
  password?: string;
  image?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
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
    }),
    {
      name: "auth-storage", // clave en localStorage
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
