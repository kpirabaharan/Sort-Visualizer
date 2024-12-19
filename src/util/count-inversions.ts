export function calculateInversionScale(arr: number[]): number {
  const n = arr.length;
  let inversionCount = 0;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) {
        inversionCount++;
      }
    }
  }

  const maxInversions = (n * (n - 1)) / 2;
  return 1 - (2 * inversionCount) / maxInversions;
}
