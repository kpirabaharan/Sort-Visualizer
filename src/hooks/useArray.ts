import { create } from 'zustand';

import { UpdateArrayParams } from '@/types';

interface ArrayStoreProps {
  size: number;
  array: number[];
  currentIndices: number[];
  setArray: (size: number) => void;
  shuffleArray: () => void;
  updateArray: (params: UpdateArrayParams) => void;
}

function shuffle(array: number[]): number[] {
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
      array: Array.from({ length: size }, (_, index) => index + 1),
    }),
  shuffleArray: () =>
    set(state => ({
      array: shuffle(state.array),
    })),
  updateArray: ({ array, indices }: UpdateArrayParams) =>
    set(state => ({
      array: array ?? state.array,
      currentIndices: indices ?? state.currentIndices,
    })),
}));
