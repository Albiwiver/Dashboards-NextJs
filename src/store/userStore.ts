import { devtools } from "zustand/middleware";
import { persist } from "zustand/middleware";
import { create } from "zustand";
export interface User {
  id?: string;
  name: string;
  email: string;
  lastName: string;
  token?: string;
  image?: string;
  password?: string;
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
          set(
            () => ({
              user,
              isAuthenticated: true,
            }),
            false,
            "auth/setUser"
          ),

        logout: () =>
          set(
            () => ({
              user: null,
              isAuthenticated: false,
            }),
            false,
            "auth/logout"
          ),
      }),
      {
        name: "auth-storage", // unique name for localStorage
      }
    ),
    { name: "auth-store" } // nombre que verás en las Devtools
  )
);
