const getTotalX = (a: number[], b: number[]): number => {
  const gcd = (x: number, y: number): number => (y === 0 ? x : gcd(y, x % y));

  const lcm = (x: number, y: number): number => (x * y) / gcd(x, y);

  const lcmOfA = a.reduce((acc, val) => lcm(acc, val), 1);

  const gcdOfB = b.reduce((acc, val) => gcd(acc, val));

  let count = 0;
  for (let i = lcmOfA; i <= gcdOfB; i++) {
    if (gcdOfB % i === 0) {
      count++;
    }
  }

  return count;
};

export default getTotalX;
