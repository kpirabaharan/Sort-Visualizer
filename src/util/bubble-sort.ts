import { UpdateArrayParams } from '@/types';

export function* bubbleSort(
  array: number[],
): Generator<UpdateArrayParams, UpdateArrayParams, void> {
  const arr = [...array];

  const size = arr.length;

  for (let i = 0; i < size - 1; i++) {
    for (let j = 0; j < size - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        yield { array: [...arr], indices: [j + 1] };
      }
    }
  }
  return { array: [...arr], indices: [] };
}
