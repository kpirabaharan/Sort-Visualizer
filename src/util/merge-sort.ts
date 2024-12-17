export function* merge(
  arr: number[],
  left: number,
  mid: number,
  right: number,
): Generator<number[], number[], void> {
  const n1 = mid - left + 1;
  const n2 = right - mid;

  const L = new Array(n1);
  const R = new Array(n2);

  for (let i = 0; i < n1; i++) L[i] = arr[left + i];
  for (let j = 0; j < n2; j++) R[j] = arr[mid + 1 + j];

  let i = 0,
    j = 0;
  let k = left;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
    yield [...arr];
  }

  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
    yield [...arr];
  }

  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
    yield [...arr];
  }

  return arr;
}

function* mergeSortHelper(
  arr: number[],
  left: number,
  right: number,
): Generator<number[], void, void> {
  if (left >= right) return;

  const mid = Math.floor(left + (right - left) / 2);
  yield* mergeSortHelper(arr, left, mid);
  yield* mergeSortHelper(arr, mid + 1, right);
  yield* merge(arr, left, mid, right);
}

export function* mergeSort(array: number[]) {
  const arr = [...array];
  yield* mergeSortHelper(arr, 0, array.length - 1);
  return arr;
}
