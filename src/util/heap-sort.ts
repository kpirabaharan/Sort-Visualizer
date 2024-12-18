import { UpdateArrayParams } from '@/types';

function* heapify(
  arr: number[],
  n: number,
  i: number,
): Generator<UpdateArrayParams, void, void> {
  let largest = i;
  const l = 2 * i + 1;
  const r = 2 * i + 2;

  if (l < n && arr[l] > arr[largest]) {
    largest = l;
  }

  if (r < n && arr[r] > arr[largest]) {
    largest = r;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    yield { array: [...arr], indices: [i, largest] };

    yield* heapify(arr, n, largest);
  }
}

function* heapSortHelper(
  arr: number[],
): Generator<UpdateArrayParams, void, void> {
  const n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    yield* heapify(arr, n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    yield { array: [...arr], indices: [0, i] };

    yield* heapify(arr, i, 0);
  }
}

function* heapSort(
  array: number[],
): Generator<UpdateArrayParams, UpdateArrayParams, void> {
  const arr = [...array];
  yield* heapSortHelper(arr);
  return { array: [...arr], indices: [] };
}

export { heapSort };
