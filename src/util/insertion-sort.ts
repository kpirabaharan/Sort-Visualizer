export function* insertionSort(array: number[]) {
  const arr = [...array];

  const size = arr.length;

  for (let i = 1; i < size; i++) {
    const curr = arr[i];
    let j = i - 1;
    // Move elements in to be sorted sub array one right
    while (j >= 0 && curr < arr[j]) {
      arr[j + 1] = arr[j];
      yield [...arr];
      j -= 1;
    }
    arr[j + 1] = curr;
    yield [...arr];
  }

  return arr;
}
