import { UpdateArrayParams } from '@/types';

function swap(arr: number[], i: number, j: number) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function* partition(
  arr: number[],
  low: number,
  high: number,
): Generator<UpdateArrayParams, number, void> {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
      yield { array: [...arr], indices: [i, j] };
    }
  }

  swap(arr, i + 1, high);
  yield { array: [...arr], indices: [i + 1, high] };
  return i + 1;
}

function* quickSortHelper(
  arr: number[],
  low: number,
  high: number,
): Generator<UpdateArrayParams, void, void> {
  if (low < high) {
    const partitionGen = partition(arr, low, high);
    let pi: number | undefined;

    while (true) {
      const { value, done } = partitionGen.next();
      if (done) {
        pi = value;
        break;
      }
      yield value;
    }

    yield* quickSortHelper(arr, low, pi - 1);
    yield* quickSortHelper(arr, pi + 1, high);
  }
}

export function* quickSort(
  array: number[],
): Generator<UpdateArrayParams, UpdateArrayParams, void> {
  const arr = [...array];
  yield* quickSortHelper(arr, 0, arr.length - 1);
  return { array: [...arr], indices: [] };
}
