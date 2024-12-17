import { create } from 'zustand';

interface ArrayStoreProps {
  size: number;
  array: number[];
  setArray: (size: number) => void;
  updateArray: (array: number[]) => void;
}

function shuffleArray(array: number[]): number[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export const useArray = create<ArrayStoreProps>(set => ({
  size: 50,
  array: [],
  setArray: (size: number) =>
    set({
      size,
      array: shuffleArray(
        Array.from({ length: size }, (_, index) => index + 1),
      ),
    }),
  updateArray: (array: number[]) => set({ array }),
}));
