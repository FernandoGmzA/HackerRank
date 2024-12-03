function plusMinus(arr: number[]): void {
  // Write your code here
  let zeros = 0;
  let positives = 0;
  let negatives = 0;
  arr.forEach((item) => {
    if (item === 0) {
      zeros++;
    } else if (item < 0) {
      negatives++;
    } else {
      positives++;
    }
  });

  console.log((zeros / arr.length).toFixed(6));
  console.log((positives / arr.length).toFixed(6));
  console.log((negatives / arr.length).toFixed(6));
}

export default plusMinus;
