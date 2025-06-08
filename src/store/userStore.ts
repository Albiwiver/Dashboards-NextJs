// store/userStore.ts
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

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

export const useAuthStore = create<AuthState>()(
  devtools(
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
        name: "auth-storage", // Nombre en localStorage
      }
    ),
    {
      name: "AuthStore", // Nombre que se muestra en Zukeper
    }
  )
);
