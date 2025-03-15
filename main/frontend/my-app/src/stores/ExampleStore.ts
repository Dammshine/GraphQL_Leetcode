import { create } from 'zustand';

interface AppState {
  authToken: string | null;
  isBuffering: boolean;
  speed: number;
  setAuthToken: (token: string | null) => void;
  setBuffering: (state: boolean) => void;
  setSpeed: (speed: number) => void;
}

export const useAppStore = create<AppState>((set) => ({
  authToken: null,
  isBuffering: false,
  speed: 1,

  setAuthToken: (token) => set({ authToken: token }),
  setBuffering: (state) => set({ isBuffering: state }),
  setSpeed: (speed) => set({ speed }),
}));
