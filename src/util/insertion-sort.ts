import { UpdateArrayParams } from '@/types';

export function* insertionSort(
  array: number[],
): Generator<UpdateArrayParams, UpdateArrayParams, void> {
  const arr = [...array];
  const size = arr.length;

  for (let i = 1; i < size; i++) {
    const curr = arr[i];
    let j = i - 1;

    while (j >= 0 && curr < arr[j]) {
      arr[j + 1] = arr[j];
      arr[j] = curr;
      j--;
      yield { array: [...arr], indices: [j + 1] };
    }
  }

  return { array: [...arr], indices: [] };
}
