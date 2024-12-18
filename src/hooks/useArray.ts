import { create } from 'zustand';

import { UpdateArrayParams } from '@/types';

interface ArrayStoreProps {
  size: number;
  array: number[];
  currentIndices: number[];
  setArray: (size: number) => void;
  updateArray: (params: UpdateArrayParams) => void;
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
  currentIndices: [],
  setArray: (size: number) =>
    set({
      size,
      array: shuffleArray(
        Array.from({ length: size }, (_, index) => index + 1),
      ),
    }),
  updateArray: ({ array, indices }: UpdateArrayParams) =>
    set(state => ({
      array: array ?? state.array,
      currentIndices: indices ?? state.currentIndices,
    })),
}));
