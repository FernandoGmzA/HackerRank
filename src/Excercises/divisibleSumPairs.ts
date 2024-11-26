function divisibleSumPairs(n: number, k: number, ar: number[]): number {
  // Write your code here
  let count = 0;

  for (let i = 0; i < ar.length; i++) {
    for (let j = 1; j < ar.length; j++) {
      if ((ar[i] + ar[j]) % k === 0) {
        if (i < j) {
          count++;
        }
      }
    }
  }

  console.log(count);
  return count;
}

export default divisibleSumPairs;
