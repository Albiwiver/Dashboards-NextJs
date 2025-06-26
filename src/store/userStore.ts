import { devtools } from "zustand/middleware";
import { persist } from "zustand/middleware";
import { create } from "zustand";
import { setCookie, deleteCookie } from "cookies-next";

export interface User {
  id?: string;
  name: string;
  lastName: string;
  email: string;
  phone?: string;
  country?: string;
  city?: string;
  address?: string;
  postalCode?: string;
  avatar?: string;
  token?: string;
  password?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  hasHydrated: boolean;
  setHasHydrated: (value: boolean) => void;
  setUser: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        isAuthenticated: false,
        hasHydrated: false,
        setHasHydrated: (value) => set({ hasHydrated: value }),

        setUser: (user) => {
          set(
            () => ({
              user,
              isAuthenticated: true,
            }),
            false,
            "auth/setUser"
          );

          if (user.token) {
            setCookie("token", user.token, {
              maxAge: 60 * 60 * 24 * 7,
              path: "/",
            });
          }
        },

        logout: () => {
          set(
            () => ({
              user: null,
              isAuthenticated: false,
            }),
            false,
            "auth/logout"
          );

          deleteCookie("token");
        },
      }),
      {
        name: "auth-storage",
        onRehydrateStorage: () => (state) => {
          state?.setHasHydrated(true);
        },
      }
    ),
    { name: "auth-store" }
  )
);
