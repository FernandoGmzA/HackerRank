function birthday(s: number[], d: number, m: number): number {
  //m determines the length of the chocolate
  // d determines the summatory of the substring of the chocolate
  let count = 0;

  if (m === 1) {
    if (s.reduce((a, b) => a + b, 0) === d) {
      console.log(1, m);
      return 1;
    }
    console.log(count, d);
    return count;
  }

  for (let i = 0; i < s.length; i++) {
    if (s.slice(i, m + i).length > 1) {
      if (s.slice(i, m + i).reduce((a, b) => a + b, 0) === d) {
        count++;
      }
    }
  }

  console.log(count);

  return count;
}

export default birthday;
