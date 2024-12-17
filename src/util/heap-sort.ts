function* heapify(
  arr: number[],
  n: number,
  i: number,
): Generator<number[], void, void> {
  let largest = i;
  let l = 2 * i + 1;
  let r = 2 * i + 2;

  if (l < n && arr[l] > arr[largest]) {
    largest = l;
  }

  if (r < n && arr[r] > arr[largest]) {
    largest = r;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    yield [...arr];

    yield* heapify(arr, n, largest);
  }
}

function* heapSortHelper(arr: number[]): Generator<number[], void, void> {
  let n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    yield* heapify(arr, n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    yield [...arr];

    yield* heapify(arr, i, 0);
  }
}

function* heapSort(array: number[]) {
  const arr = [...array];
  yield* heapSortHelper(arr);
  return arr;
}

export { heapSort };
