import { UpdateArrayParams } from '@/types';

export function* selectionSort(
  array: number[],
): Generator<UpdateArrayParams, UpdateArrayParams, void> {
  const arr = [...array];
  const size = arr.length;

  for (let i = 0; i < size - 1; i++) {
    let min_idx = i;
    for (let j = i + 1; j < size; j++) {
      if (arr[j] < arr[min_idx]) {
        min_idx = j;
      }
    }
    [arr[i], arr[min_idx]] = [arr[min_idx], arr[i]];
    yield { array: [...arr], indices: [i, min_idx] };
  }

  return { array: [...arr], indices: [] };
}
