import { devtools } from "zustand/middleware";
import { persist } from "zustand/middleware";
import { create } from "zustand";

export interface User {
  id?: string;
  name: string;
  email: string;
  lastName: string;
  token?: string;
  password?: string;
  avatar?: string;
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
        name: "auth-storage",
        onRehydrateStorage: () => (state) => {
          state?.setHasHydrated(true);
        },
      }
    ),
    { name: "auth-store" }
  )
);
