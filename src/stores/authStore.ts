import { create } from "zustand";

export type AuthState = {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  username: string;
  setUsername: (username: string) => void;
  lastLoggedIn: string;
  setLastLoggedIn: (lastLoggedIn: string) => void;
};

const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  lastLoggedIn: "",
  setIsLoggedIn: async (isLoggedIn: boolean) => {
    set({ isLoggedIn })
  },
  username: "",
  setUsername: (username: string) => set({ username }),
  setLastLoggedIn: (lastLoggedIn: string) => set({ lastLoggedIn }),
}));

export default useAuthStore;
