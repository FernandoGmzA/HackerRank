function miniMaxSum(arr: number[]): void {
  // Write your code here
  let minSum = Number.POSITIVE_INFINITY;
  let maxSum = -1;
  let total = arr.reduce((a, b) => a + b, 0);

  for (let i = 0; i < arr.length; i++) {
    if (total - arr[i] > maxSum) {
      maxSum = total - arr[i];
    }

    if (total - arr[i] < minSum) {
      minSum = total - arr[i];
    }
  }

  console.log(minSum, maxSum);
}

export default miniMaxSum;
