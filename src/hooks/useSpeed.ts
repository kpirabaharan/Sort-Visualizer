import { create } from 'zustand';

interface SpeedStoreProps {
  speed: number;
  setSpeed: (speed: number) => void;
}

export const useSpeed = create<SpeedStoreProps>(set => ({
  speed: 100,
  setSpeed: (speed: number) => set({ speed }),
}));
