function breakingRecords(scores: number[]): number[] {
  let countHighest = 0;
  let countLowest = 0;
  let currentHighest = scores[0];
  let currentLowest = scores[0];

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > currentHighest) {
      currentHighest = scores[i];
      countHighest++;
    }

    if (scores[i] < currentLowest) {
      currentLowest = scores[i];
      countLowest++;
    }
  }

  return [countHighest, countLowest];
}

export default breakingRecords;
