function migratoryBirds(arr: number[]): number {
  // Step 1: Create a frequency map
  const frequency: { [key: number]: number } = {};
  for (const bird of arr) {
    frequency[bird] = (frequency[bird] || 0) + 1;
  }

  // Step 2: Determine the highest frequency
  let maxFrequency = 0;
  let mostFrequentBird = Number.MAX_SAFE_INTEGER;

  for (const [bird, count] of Object.entries(frequency)) {
    const birdId = parseInt(bird);

    // Step 3: Check if this bird has a higher frequency or is smaller with the same frequency
    if (
      count > maxFrequency ||
      (count === maxFrequency && birdId < mostFrequentBird)
    ) {
      maxFrequency = count;
      mostFrequentBird = birdId;
    }
  }

  return mostFrequentBird;
}

export default migratoryBirds;
